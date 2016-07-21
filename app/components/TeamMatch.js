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
	componentDidMount() {
		this.teamName = this.state.teamName;
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
			<section className="scoring__team">
				<h3>{this.teamName}</h3>
				<div className="scoring__controls">
					<div className="score-total">{this.state.score}</div>
					<div className="score-toggle">
						<a href="#" onClick={this.handleScoreMinus}>{'-'}</a>
						<a href="#" onClick={this.handleScorePlus}>{'+'}</a>
					</div>
					<div className="score-bulls">
						<a href="#" onClick={this.handleScoreSpecial}>{'Bullseye'}</a>
					</div>
				</div>
			</section>
			);
	}
}

export default TeamMatch;