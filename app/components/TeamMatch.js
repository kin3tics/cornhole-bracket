import React from 'react';
import GameStore from '../stores/GameStore';

class TeamMatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamName: props.team,
			score: props.score
		}
		this.handleScorePlus = this.handleScorePlus.bind(this);
		this.handleScoreMinus = this.handleScoreMinus.bind(this);
		this.handleScoreSpecial = this.handleScoreSpecial.bind(this);
		this.handleScore = props.teamScoreChange
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			teamName: newProps.team,
			score: newProps.score
		});
	}
	handleScorePlus() {
		this.handleScore(1);
	}
	handleScoreMinus() {
		this.handleScore(-1);
	}
	handleScoreSpecial() {
		this.handleScore(3);
	}
	render() {
		return (
			<div className="pure-g">
				<div className="team-name pure-u-1"><h3> {this.state.teamName}</h3></div>
				<div className="score background-color-2 pure-u-1"><h1> {this.state.score} </h1></div>
				<div className="sub-score background-color-2 pure-u-1-2" onClick={this.handleScoreMinus}><h3>-</h3></div>
				<div className="add-score background-color-2 pure-u-1-2" onClick={this.handleScorePlus}><h3>+</h3></div>
				<div className="bullseye background-color-4 pure-u-1" onClick={this.handleScoreSpecial}><h3>BULLSEYE</h3></div>
			</div>
			);
	}
}

export default TeamMatch;