import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div id="Home" className="background-color-1">
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
						<div><button className="primary-btn background-color-3">COMPETITOR</button></div>
						<div><button className="secondary-btn no-background">MODERATOR</button></div>
					</div>
					</div>
				</div>
			</div>);
	}
};

export default Home;