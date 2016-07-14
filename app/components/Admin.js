import React from 'react';
import TeamStore from '../stores/TeamStore';

import AddTeam from './AddTeam';
import TopMenu from './TopMenu';

import { Events } from'../constants';
var TeamEvents = Events.TeamEvents;

class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.updateState = this.updateState.bind(this);
		this.state = {
			teams: TeamStore.getTeams(),
			showAdd: false
		};
	}
	componentWillMount() {
		TeamStore.fetchTeams();
		TeamStore.on(TeamEvents.LOADED, this.updateState);
	}
	componentWillUnmount() {
		TeamStore.off(TeamEvents.LOADED, this.updateState);
	}
	
	updateState() {
		this.setState({
			teams: TeamStore.getTeams()
		});
	}
	render() {
		var teams = (<ul><li>No Teams</li></ul>);
		var addTeam = '';
		if(this.state.showAdd) {
			addTeam = (<AddTeam />);
		}
		if (this.state.teams && this.state.teams.length > 1) {
			teams = (<div className="teams">
				{ this.state.teams.map((team) => {
					return(
					<div key={team.teamId} className="pure-g">
						<div className="pure-u-1-2 relative"><span className="vertical-align absolute">{team.teamName}</span></div>
						<div className="pure-u-1-2 relative">
							<ul>
								<li>{team.players[0]}</li>
								<li>{team.players[1]}</li>
							</ul>
						</div>
					</div>);
				})}
			</div>);
		}
		return (
			<div id="Admin">
				<TopMenu />
				<div className="container pure-g">
					<div className="pure-u-1">
						<h3>Teams</h3>
					</div>
					<div className="pure-u-1">
						<button onClick={this.handleClick} className="background-color-3">Add</button>
						{addTeam}
					</div>
					<div className="pure-u-1">
						{teams}
					</div>
				</div>
			</div>

		);
	}
	handleClick(e) {

		var cur = this.state.showAdd;
		this.setState({
			showAdd: !cur
		});
	}
};

export default Admin;