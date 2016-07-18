import flux from 'flux-react';
import actions from '../actions/BracketActions';
import ApiUtil from '../utils/ApiUtil';
import { Events } from '../constants';

var BracketEvents = Events.BracketEvents;

var BracketStore = flux.createStore({
	bracketCache: [],
	actions: [
		actions.generateBracket,
		actions.generateBracketSuccess,
		actions.generateBracketFail,
		actions.loadBracketSuccess,
		actions.loadBracketFail
	],
	generateBracket () {
		ApiUtil.generateBracket();
	},
	generateBracketSuccess () {
		this.emit(BracketEvents.GENERATED);
	},
	generateBracketFail() {
		//Failure message?
	},
	loadBracketSuccess (bracket) {
		this.bracketCache = bracket.data;
		this.emit(BracketEvents.LOADED);
	},
	loadBracketFail () {
		//Failure message?
	},
	exports: {
		fetchBracket() {
			ApiUtil.loadBracket();
		},
		getBracket() {
			return this.bracketCache;
		}
	}
});

export default BracketStore;