import React from 'react';
import GameStore from '../stores/GameStore';
import LoginStore from '../stores/LoginStore';

import TopMenu from './TopMenu';
import TeamMatch from './TeamMatch';

import { Events } from'../constants';

// import '../sass/globals.scss';
// import '../sass/main.scss';
// import '../sass/scoring.scss';

var GameEvents = Events.GameEvents;

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameId: props.params.gameId,
			game: GameStore.getGame(props.params.gameId),
			isLoggedIn: LoginStore.status()
		}
		this.updateState = this.updateState.bind(this);
		this.handleTeam1ScoreChange = this.handleTeam1ScoreChange.bind(this);
		this.handleTeam2ScoreChange = this.handleTeam2ScoreChange.bind(this);
		this.handleGameSubmit = this.handleGameSubmit.bind(this);
		this.clearTimer = this.clearTimer.bind(this);
    	this.setTimer = this.setTimer.bind(this);
	}
	componentWillMount() {
		GameStore.on(GameEvents.LOADED, this.updateState);
	}
	componentDidMount() {
		this.setTimer();
	}
	componentWillUnmount() {
		this.clearTimer();
		GameStore.off(GameEvents.LOADED, this.updateState);
	}
	updateState() {
		this.setState({
			game: GameStore.getGame(this.state.gameId)
		});
	}
	setTimer() {
		var timer = this.state.timer;
		if (timer) clearTimeout(timer);
		GameStore.fetchGame(this.state.gameId);
		var that = this;
		timer = setTimeout(that.setTimer, 5000);
		this.setState({ timer: timer });
	}
	clearTimer() {
		var timer = this.state.timer;
		if(timer) clearTimeout(timer);
		timer = null;
		this.setState({ timer: timer });
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
		var buttons = "";
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
		if (this.state.isLoggedIn) {
			buttons = (
				<article className="submit">
					<a href="#" className="btn-submit" onClick={this.handleGameSubmit}>{'submit game'}</a>
					{/*<a href="#" className="btn-forfeit">{'forfeit game'}</a>*/}
				</article>
			);
		}
		return (
			<div id="Scoring">
				<TopMenu />
				<div className="scoring-container">
					<article className="scoring">
						<TeamMatch team={team1name} score={team1score} teamScoreChange={this.handleTeam1ScoreChange} />
						<TeamMatch team={team2name} score={team2score} teamScoreChange={this.handleTeam2ScoreChange} />
					</article>
					{buttons}
				</div>
			</div>
		);
	}
}

export default Game;