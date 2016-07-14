import xhr from './xhr';
import teamActions from '../actions/TeamActions';
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
	}

}

export default ApiUtils;