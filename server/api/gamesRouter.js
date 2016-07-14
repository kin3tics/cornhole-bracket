import express from 'express';
import Game from '../../models/game';

var gamesRouter = express.Router();

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

	Bracket
		.findOne({ gameId: gameId }, function(err, game) {
			if (err) return next(err);

			if(!game) {
				return res.status(404).send({ message: 'Game ' + gameId + ' not found.' });
			}

			res.send(game);
		})
});

module.exports = gamesRouter;