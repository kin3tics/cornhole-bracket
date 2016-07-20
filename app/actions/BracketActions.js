import flux from 'flux-react';

var BracketActions = flux.createActions([
	'generateBracketSuccess',
	'generateBracketFail',
	'loadBracketSuccess',
	'loadBracketFail'
]);

export default BracketActions;