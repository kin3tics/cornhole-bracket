import xhr from './xhr';
import teamActions from '../actions/TeamActions';
import bracketActions from '../actions/BracketActions';
import gameActions from '../actions/GameActions';
//Stores

var ApiUtils = {
	loadTeams() {
		xhr.getJSON(`/api/teams/`, (err, res) => {
			if (err) 
				teamActions.getTeamsFail();
			else
				teamActions.getTeamsSuccess(res);
		});
	},
	saveTeam(team) {
		xhr.postJSON(`/api/teams/`, team, (err, res) => {
			if(err)
				teamActions.updateTeamFail();
			else
				teamActions.updateTeamSuccess(res);
		})
	},
	deleteTeam(team) {
		xhr.postJSON(`/api/teams/` + team.teamId + `/delete`, team, (err, res) => {
			if(err)
				teamActions.updateTeamFail();
			else
				teamActions.updateTeamSuccess(res);
		})
	},
	generateBracket() {
		xhr.getJSON(`/api/brackets/generate`, (err, res) => {
			if (err)
				bracketActions.generateBracketFail();
			else
				bracketActions.generateBracketSuccess();
		})
	},
	loadBracket() {
		xhr.getJSON(`/api/brackets/`, (err, res) => {
			if (err)
				bracketActions.loadBracketFail();
			else
				bracketActions.loadBracketSuccess(res);
		})
	},
	loadGame(gameId) {
		xhr.getJSON(`/api/games/` + gameId, (err,res) => {
			if (err)
				gameActions.loadGameFail();
			else
				gameActions.loadGameSuccess(res);
		})
	},
	updateGame(game) {
		xhr.postJSON(`/api/games/` + game.gameId, game, (err, res) => {
			if(err)
				gameActions.updateGameFail();
			else
				gameActions.updateGameSuccess(res);
		})
	}
}

export default ApiUtils;