import express from 'express';
import Game from '../../models/game';

var gamesRouter = express.Router();

function FinishGame(game) {
	var newGameBracket = game.bracket + 1;
	var newGameIndex = (game.index - (game.index % 4)) / 4;
	Game
		.findOne({ 
			bracket: newGameBracket,
			index: newGameIndex 
		})
		.exec(function(err, newGame) {
			var winningTeam = team1Score > team2Score ? team1 : team2;
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

			if(!team) {
				return res.status(404).send({ message: 'Game ' + gameId + ' not found.' });
			}
			
			if(game.gameStatus == 1) {
				game.team1Score = data.team1Score;
				game.team2Score = data.team2Score;
			} else {
				if(game.team1Score != data.team1Score
					|| game.team2Score != data.team2Score)
				{
					return res.status(500).send({ message: 'Game ' + gameId + ' not In Progess. Cannot change score.'});					
				}
			}
			game.gameStatus = data.gameStatus;
			game.save(function(err) {
				if(err) throw err;
				FinishGame();
			})

			res.send(team);
		});
});


module.exports = gamesRouter;