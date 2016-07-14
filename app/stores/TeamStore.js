import flux from 'flux-react';
import actions from '../actions/TeamActions';
import ApiUtil from '../utils/ApiUtil';
import { Events } from '../constants';

var TeamEvents = Events.TeamEvents;

var TeamStore = flux.createStore({
	teamsCache: [],
	actions: [
		actions.addTeam,
		//actions.addTeamFail,
		//actions.updateTeamSuccess,
		//actions.updateTeamFail,
		actions.getTeamsSuccess,
		//actions.getTeamsFail,
		//actions.getTeamSuccess,
		//actions.getTeamFail
	],
	addTeam (teamId, teamName, teamMembers) {
		ApiUtil.saveTeam({teamId: teamId, teamName: teamName, players: teamMembers});
	},
	updateTeamSuccess () {
		ApiUtil.loadTeams();
	},
	getTeamsSuccess (teams) {
		this.teamsCache = teams.data;
		this.emit(TeamEvents.LOADED);
	},
	exports: {
		fetchTeams() {
			ApiUtil.loadTeams();
		},
		getTeams() {
			return this.teamsCache;
		}
	}
});

export default TeamStore;