import express from 'express';
import mongoose from 'mongoose';

import Bracket from '../../models/bracket';
import Team from '../../models/team';
import Game from '../../models/game';
import Round from '../../models/round';

var bracketsRouter = express.Router();

function generateGames(numGames, round, bracket) {
	var games = [];
	for(var j = 0; j < numGames; j++) {
		var game = new Game({
			gameId: mongoose.Types.ObjectId(),
			bracket: bracket,
			round: round,
			index: j,
			gameStatus: 0,
			team1Score: 0,
			team2Score: 0,
			team1: null,
			team2: null
		});
		game.save(function(err) {
			if(err) throw err;
		});
		games.push(game);
	}
	return games;
}
function generateRound(numGames, round, bracket) {
	var games = generateGames(numGames, round, bracket);
	var round = new Round({
		round: round,
		roundId: mongoose.Types.ObjectId(),
		games: 	games
	});
	round.save(function(err) {
		if(err) throw err;
	});
	return round;
}
function generateBracket(numTeams, bracketType) {
	var numRounds = Math.log(numTeams + (numTeams % 2)) / Math.log(2);
	var rounds = [];
	for(var i = 0; i < numRounds; i++) {
		var numGames = (numTeams + (numTeams % 2)) / Math.pow(2, i + 1);
		var round = generateRound(numGames, i + 1, bracketType);
		rounds.push(round);
	}
	var bracket = new Bracket({
		type: bracketType,
		bracketId: mongoose.Types.ObjectId(),
		rounds: rounds
	});
	bracket.save(function(err) {
		if(err) throw err;
	});
	return bracket;
}
function cleanBrackets() {
	Bracket.remove({}, function(err) {
		if(err) throw err;
	});
	Round.remove({}, function(err) {
		if(err) throw err;
	});
	Game.remove({}, function(err) {
		if(err) throw err;
	})
}

bracketsRouter.get('/', function(req, res, next) {
	//get brackets
	Bracket
		.find()
		.populate({
			path: 'rounds',
			model: 'Round',
			populate : {
				path: 'games',
				populate: {
					path: 'team1 team2'
				}
			}
		})
		.exec(function(err, brackets) {
			if (err) return next(err);
			res.send(brackets);
		})
});

bracketsRouter.get('/generate', function(req, res, next) {
	//Get available Teams
	Team.find().exec(function(err, teams) {
		//Clean out old set of games
		cleanBrackets();
		//Create the games
		var teamsCount = teams.length;
		//Create the winners bracket
		var winBracket = generateBracket(teamsCount, 0);
		//Create the losers bracket
		var loseBracket = generateBracket(teamsCount - 2, 1);
		//Create the championship
		var champBracket = generateBracket(2, 2);

		//seed the teams
		var gamesToSeed = winBracket.rounds[0].games;
		for(var i = 0; i < gamesToSeed.length; i++) {
			gamesToSeed[i].team1 = teams[(i * 2)];
			gamesToSeed[i].team2 = teams[(i * 2) + 1];
			gamesToSeed[i].save(function(err) {
				if(err) throw err;
			});
		}

	});
});

bracketsRouter.get('/:id', function(req, res, next) {
	var roundNum = req.params.id;

	Bracket
		.findOne({ round: roundNum }, function(err, bracket) {
			if (err) return next(err);

			if(!bracket) {
				return res.status(404).send({ message: 'Bracket round ' + roundNum + ' not found.' });
			}

			res.send(bracket);
		})
});

module.exports = bracketsRouter;