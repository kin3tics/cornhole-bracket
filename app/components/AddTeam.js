import React from 'react';
import TeamStore from '../stores/TeamStore';
import TeamActions from '../actions/TeamActions';

class AddTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			members: ['','']
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateTeamMember1 = this.updateTeamMember1.bind(this);
		this.updateTeamMember2 = this.updateTeamMember2.bind(this);
	}

	updateName(e) {
		this.setState({ name: e.target.value });
	}

	updateTeamMember1(e) {
		var members = this.state.members;
		members[0] = e.target.value;
		this.setState({ members: members });
	}

	updateTeamMember2(e) {
		var members = this.state.members;
		members[1] = e.target.value;
		this.setState({ members: members });
	}

	handleSubmit(e) {
		e.preventDefault();

		TeamActions.addTeam(null, this.state.name, this.state.members);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned">
					<fieldset>
						<div className="pure-control-group">
							<label htmlFor="teamName">Team Name</label>
							<input id="teamName" type='text' value={this.state.name} onChange={this.updateName} autoFocus />
						</div>
						<div className="pure-control-group">
							<label htmlFor="teamMember1">Team Member 1</label>
							<input id="teamMember1" type='text' value={this.state.members[0]} onChange={this.updateTeamMember1} />
						</div>
						<div className="pure-control-group">
							<label htmlFor="teamMember2">Team Member 2</label>
							<input id="teamMember2" type='text' value={this.state.members[1]} onChange={this.updateTeamMember2} />
						</div>
						<div className="pure-controls">
							<button className="background-color-3">Submit</button>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
};

export default AddTeam;