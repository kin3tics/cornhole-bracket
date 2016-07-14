import express from 'express';
import Bracket from '../../models/bracket';

var bracketsRouter = express.Router();

bracketsRouter.get('/', function(req, res, next) {
	//get brackets
	Bracket
		.find()
		.exec(function(err, brackets) {
			if (err) return next(err);

			res.send(brackets);
		})
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