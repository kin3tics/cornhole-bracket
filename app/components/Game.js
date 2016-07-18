import React from 'react';
import GameStore from '../stores/GameStore';

import TopMenu from './TopMenu';
import TeamMatch from './TeamMatch';

import { Events } from'../constants';
var GameEvents = Events.GameEvents;

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameId: props.params.gameId,
			game: GameStore.getGame(props.params.gameId)
		}
		this.updateState = this.updateState.bind(this);
	}
	componentWillMount() {
		GameStore.fetchGame(this.state.gameId);
		GameStore.on(GameEvents.LOADED, this.updateState);
	}
	componentWillUnmount() {
		GameStore.off(GameEvents.LOADED, this.updateState);
	}
	updateState() {
		this.setState({
			game: GameStore.getGame(this.state.gameId)
		});
	}
	render() {
		var team1name = "Team 1";
		var team2name = "Team 2";
		var team1score = 0;
		var team2score = 0;
		if ( this.state.game && this.state.game.team1) {
			team1name = this.state.game.team1.teamName;
		}
		if ( this.state.game && this.state.game.team2) {
			team2name = this.state.game.team2.teamName;
		}
		if (this.state.game) {
			team1score = (this.state.game.team1score) ? this.state.game.team1score : 0;
			team2score = (this.state.game.team2score) ? this.state.game.team2score : 0;
		}

		var buttons = (<h3> Buttons go here </h3>);
		return (
			<div id="Game">
				<TopMenu />
				<div className="container pure-g">
					<div className="team1 pure-u-1">
						<TeamMatch team={team1name} score={team1score} />
					</div>
					<div className="team2 pure-u-1">
						<TeamMatch team={team2name} score={team2score} />
					</div>
					<div className="buttons background-color-1 pure-u-1">
						<div className="pure-g">
							<div className="pure-u-1">
								<button className="no-background">SUBMIT GAME</button>
							</div>
							<div className="pure-u-1">
								<span>FORFEIT GAME</span>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			);
	}
}

export default Game;