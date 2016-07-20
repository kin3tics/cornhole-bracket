import flux from 'flux-react';

var BracketActions = flux.createActions([
	'generateBracket',
	'generateBracketSuccess',
	'generateBracketFail',
	'loadBracketSuccess',
	'loadBracketFail'
]);

export default BracketActions;