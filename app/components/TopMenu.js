import React from 'react';
import { Link } from 'react-router';

class TopMenu extends React.Component {
	render() {
		return (
		<div id="TopMenu" className="pure-g background-color-1">
			<div className="pure-u-1">
				<Link to={`/bracket/`}><div className="logo">
				</div></Link>
			</div>
		</div>);
	}
}

export default TopMenu;