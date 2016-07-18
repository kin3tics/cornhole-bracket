import React from 'react';
import GameStore from '../stores/GameStore';

class TeamMatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamName: props.team,
			score: props.score
		}
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			teamName: newProps.team,
			score: newProps.score
		});
	}
	render() {
		return (
			<div className="pure-g">
				<div className="team-name pure-u-1"><h3> {this.state.teamName}</h3></div>
				<div className="score background-color-2 pure-u-1"><h1> {this.state.score} </h1></div>
				<div className="sub-score background-color-2 pure-u-1-2"><h3>-</h3></div>
				<div className="add-score background-color-2 pure-u-1-2"><h3>+</h3></div>
				<div className="bullseye background-color-4 pure-u-1"><h3>BULLSEYE</h3></div>
			</div>
			);
	}
}

export default TeamMatch;