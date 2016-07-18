import React from 'react';
import {Link} from 'react-router';
import BracketStore from '../stores/BracketStore';

import TopMenu from './TopMenu';

import { Events } from'../constants';
var BracketEvents = Events.BracketEvents;

class Bracket extends React.Component {
	constructor(props) {
		super(props);
		this.updateState = this.updateState.bind(this);
		this.state = {
			bracket: BracketStore.getBracket()
		}
	}
	componentWillMount() {
		BracketStore.fetchBracket();
		BracketStore.on(BracketEvents.LOADED, this.updateState);
	}
	componentWillUnmount() {
		BracketStore.off(BracketEvents.LOADED, this.updateState);
	}
	updateState() {
		this.setState({
			bracket: BracketStore.getBracket()
		});
	}
	render() {
		var games = (<div> Bracket has not been generated yet. </div>);
		if(this.state.bracket && this.state.bracket.length > 1
			 && this.state.bracket[0].rounds && this.state.bracket[0].rounds.length > 1
			 && this.state.bracket[0].rounds[0].games && this.state.bracket[0].rounds[0].games.length > 1 ) {
			games = (<div className="games">
				{this.state.bracket[0].rounds[0].games.map((game) => {
					return (
						<div><Link to={`/game/${game.gameId}`}>
						<div key={game.gameId} className="gamelet pure-g">
							<div className="pure-u-1 relative">
								<span className="vertical-align">{game.team1.teamName}</span>
							</div>
							<div className="pure-u-1 relative">
								<span className="vertical-align">{game.team2.teamName}</span>
							</div>
						</div></Link>
						</div>
					);
				})}

			</div>);
		}
		return (
			<div id="Bracket">
				<TopMenu />
				<div className="container pure-g">
					<div className="pure-u-1">
						<h3>Games</h3>
					</div>
					<div className="pure-u-1">
						{games}
					</div>
				</div>
			</div>
		);
	}
};

export default Bracket;