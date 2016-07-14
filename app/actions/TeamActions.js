import flux from 'flux-react';

var TeamActions = flux.createActions([
	'addTeam',
	'updateTeamSuccess',
	'updateTeamFail',
	'getTeamsSuccess',
	'getTeamsFail',
	'getTeamSuccess',
	'getTeamFail'
]);

export default TeamActions;