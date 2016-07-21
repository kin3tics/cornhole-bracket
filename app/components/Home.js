import React from 'react';
import { browserHistory, Link } from 'react-router';

import LoginStore from '../stores/LoginStore';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLogin: false,
			password: ""
		};
		this.updatePassword = this.updatePassword.bind(this);
		this.handleModeratorLogin = this.handleModeratorLogin.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updatePassword(e) {
		this.setState({ password: e.target.value });
	}
	handleModeratorLogin(e) {
		this.setState({ showLogin: true });
	}
	handleSubmit(e) {
		if(LoginStore.logIn(this.state.password)) {
			browserHistory.push('/bracket');
		}
	}
	render() {
		var login = "";
		if (this.state.showLogin) {
			login = (
				<div className="container vertical-align pure-g">
				<div className="pure-u-1">
					<form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned">
					<fieldset>
						<div className="pure-control-group">
							<label htmlFor="Pass">Password</label>
							<input id="Pass" type='password' onChange={this.updatePassword} autoFocus />
						</div>
						<div className="pure-controls">
							<button className="background-color-3 primary-btn">Login</button>
						</div>
					</fieldset>
					</form>
				</div>
				</div>
			);
		} else {
			login = (
				<div className="container vertical-align pure-g">
				<div className="pure-u-1">
					<div className="logo"></div>
				</div>
				<div className="pure-u-1">
					<div className="icon"></div>
				</div>
				<div className="pure-u-1">
					<div className="title">
						<div><span>LUAU 2016</span></div>
						<div><h2>Cornhole Tournament</h2></div>
					</div>
				</div>
				<div className="pure-u-1">
					<div className="entry">
						<div><span>USE APP AS</span></div>
						<div><Link to={`/bracket/`}><button className="primary-btn background-color-3 btn-login">COMPETITOR</button></Link></div>
						<div><button className="secondary-btn no-background" onClick={this.handleModeratorLogin}>MODERATOR</button></div>
					</div>
				</div>
				</div>
			);
		}
		return (
			<div id="Home" className="background-color-1">
				{login}
			</div>);
	}
};

export default Home;