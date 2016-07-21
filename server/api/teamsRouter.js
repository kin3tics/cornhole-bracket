import express from 'express';
import mongoose from 'mongoose';

import Team from '../../models/team';

var teamsRouter = express.Router();

teamsRouter.get('/', function(req, res, next) {
	//get teams
	Team
		.find()
		.exec(function(err, teams) {
			if (err) return next(err);

			res.send(teams);
		})
});

teamsRouter.get('/clear', function(req, res, next) {
	Team.remove({}, function(err) {
		if(err) throw err;
		res.status(200).send({message: 'Teams cleared.'});
	});
});

teamsRouter.post('/', function(req, res, next) {
	var data = req.body;
	var team = new Team({
		teamId: mongoose.Types.ObjectId(),
		seed: 0,
		teamName: data.teamName,
		players: data.players
	});
	team.save(function(err) {
		if(err) throw err;
	});
	res.send(team);
});



teamsRouter.get('/:id', function(req, res, next) {
	var teamId = req.params.id;

	Team
		.findOne({ teamId: teamId }, function(err, team) {
			if (err) return next(err);

			if(!team) {
				return res.status(404).send({ message: 'Team ' + teamId + ' not found.' });
			}

			res.send(team);
		});
});

teamsRouter.post('/:id', function(req, res, next) {
	var data = req.body;
	Team
		.findOne({ teamId: teamId }, function(err, team) {
			if (err) return next(err);

			if(!team) {
				return res.status(404).send({ message: 'Team ' + teamId + ' not found.' });
			}
			team.teamName = data.teamName;
			team.players = data.players;
			team.save(function(err) {
				if(err) throw err;
			});
			res.send(team);
		});
});


module.exports = teamsRouter;