import flux from 'flux-react';

var GameActions = flux.createActions([
	'loadGameSuccess',
	'loadGameFail',
	'updateGameSuccess',
	'updateGameFail'
]);

export default GameActions;