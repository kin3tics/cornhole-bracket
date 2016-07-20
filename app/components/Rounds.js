import React from 'react';
import {Link} from 'react-router';

var buildTeam = function(data){
	var name = data ? data.teamName : 'TBD',
		status = data ? 'seated' : 'unseated';
	return (<h3 className={'team-name ' + status}>{name}</h3> );
};

class Rounds extends React.Component {

	render() {
		var data = this.props.data,
			status = ['pending','inprogress','completed'];

		var game = data.games.map(function(g) {
			var team1 = buildTeam(g.team1),
				team2 = buildTeam(g.team2);

			return (
				<li key={g._id} className={'bracket__games__game ' + status[g.gameStatus]}>
					<a href="#">
						<div className="bracket__games__team">
							{team1}
							<h3 className="team-score">{g.team1score || '0'}</h3>
						</div>
						<div className="bracket__games__team">
							{team2}
							<h3 className="team-score">{g.team2score || '0'}</h3>
						</div>
					</a>
				</li>
			);
		});

		return (
			<section className="bracket__round">
				<ul className="bracket__games">
					{game}
				</ul>
			</section>
		);
	}
};

export default Rounds;