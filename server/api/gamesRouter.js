import express from 'express';
import Game from '../../models/game';

var gamesRouter = express.Router();

function FinishGame(game) {
	var newGameRound = game.round + 1;
	var newGameIndex = (game.index - (game.index % 4)) / 4;
	Game
		.findOne({ 
			round: newGameRound,
			index: newGameIndex 
		})
		.exec(function(err, newGame) {
			var winningTeam = game.team1Score > game.team2Score ? game.team1 : game.team2;
			if(err) throw err;
			if(((newGameIndex * 4) + 2) > game.index) {
				newGame.team1 = winningTeam;
			} else {
				newGame.team2 = winningTeam;
			}
			newGame.save(function(err) {
				if(err) throw err;
			});
		});
}

gamesRouter.get('/', function(req, res, next) {
	Game
		.find()
		.exec(function(err, games) {
			if(err) return next(err);

			res.send(games);
		});
});

gamesRouter.get('/pending', function(req, res, next) {
	Game
		.find({ gameStatus: 0 })
		.exec(function(err, games) {
			if(err) return next(err);

			res.send(games);
		});
});

gamesRouter.get('/inprogress', function(req, res, next) {
	Game
		.find({ gameStatus: 0 })
		.exec(function(err, games) {
			if(err) return next(err);

			res.send(games);
		});
});

gamesRouter.get('/finished', function(req, res, next) {
	Game
		.find({ gameStatus: 0 })
		.exec(function(err, games) {
			if(err) return next(err);

			res.send(games);
		});
});

gamesRouter.get('/:id', function(req, res, next) {
	var gameId = req.params.id;

	Game
		.findOne({ gameId: gameId })
		.populate({
			path: 'team1 team2',
			model: 'Team',
		})
		.exec(function(err, game) {
			if (err) return next(err);

			if(!game) {
				return res.status(404).send({ message: 'Game ' + gameId + ' not found.' });
			}

			res.send(game);
		})
});

gamesRouter.post('/:id', function(req, res, next) {
	var data = req.body;
	Game
		.findOne({ gameId: data.gameId }, function(err, game) {
			if (err) return next(err);

			if(!game) {
				return res.status(404).send({ message: 'Game ' + gameId + ' not found.' });
			}
			var canFinish = false;
			//If the game hasn't started yet, start it
			if(game.gameStatus == 0 && (data.team1Score > 0 || data.team2Score > 0)) {
				game.gameStatus = 1;
			}
			if(game.gameStatus == 1) {
				game.team1Score = data.team1Score;
				game.team2Score = data.team2Score;
			} else {
				if(game.team1Score != data.team1Score
					|| game.team2Score != data.team2Score)
				{
					return res.status(500).send({ message: 'Game ' + data.gameId + ' not In Progess. Cannot change score.'});					
				}
			}
			if (data.gameStatus == 2 && (data.team1Score == 21 || data.team2Score == 21)) {
				game.gameStatus == 2;
			}
			game.gameStatus = data.gameStatus;
			game.save(function(err) {
				if(err) throw err;
				if(game.gameStatus == 2) { FinishGame(game); }
			})

			res.send(game);
		});
});


module.exports = gamesRouter;