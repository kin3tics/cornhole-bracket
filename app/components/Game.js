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
		this.handleTeam1ScoreChange = this.handleTeam1ScoreChange.bind(this);
		this.handleTeam2ScoreChange = this.handleTeam2ScoreChange.bind(this);
		this.handleGameSubmit = this.handleGameSubmit.bind(this);
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
	handleTeam1ScoreChange(scoreChange) {
		var game = this.state.game;
		game.team1Score = game.team1Score + scoreChange;
		GameStore.updateGame(game);
	}
	handleTeam2ScoreChange(scoreChange) {
		var game = this.state.game;
		game.team2Score = game.team2Score + scoreChange;
		GameStore.updateGame(game);
	}
	handleGameSubmit() {
		var game = this.state.game;
		game.gameStatus = 2;
		GameStore.updateGame(game);
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
			team1score = (this.state.game.team1Score) ? this.state.game.team1Score : 0;
			team2score = (this.state.game.team2Score) ? this.state.game.team2Score : 0;
		}

		var buttons = (<h3> Buttons go here </h3>);
		return (
			<div id="Game">
				<TopMenu />
				<div className="container pure-g">
					<div className="team1 pure-u-1">
						<TeamMatch team={team1name} score={team1score} teamScoreChange={this.handleTeam1ScoreChange} />
					</div>
					<div className="team2 pure-u-1">
						<TeamMatch team={team2name} score={team2score} teamScoreChange={this.handleTeam2ScoreChange} />
					</div>
					<div className="buttons background-color-1 pure-u-1">
						<div className="pure-g">
							<div className="pure-u-1">
								<button className="no-background" onClick={this.handleGameSubmit}>SUBMIT GAME</button>
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