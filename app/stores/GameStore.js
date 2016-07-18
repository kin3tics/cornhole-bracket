import flux from 'flux-react';
import actions from '../actions/GameActions';
import ApiUtil from '../utils/ApiUtil';
import { Events } from '../constants';

var GameEvents = Events.GameEvents;

var GameStore = flux.createStore({
	gameCache: [],
	actions: [
		actions.loadGameSuccess,
		actions.loadGameFail
	],
	loadGameSuccess(game) {
		this.gameCache[game.data.gameId] = game.data;
		this.emit(GameEvents.LOADED);
	},
	loadGameFail() {
		//throw error message?
	},
	exports: {
		fetchGame(gameId) {
			ApiUtil.loadGame(gameId);
		},
		getGame(gameId) {
			return this.gameCache[gameId];
		}
	}
});

export default GameStore;