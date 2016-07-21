import React from 'react';
import {Link} from 'react-router';
import BracketStore from '../stores/BracketStore';
import TopMenu from './TopMenu';
import Rounds from './Rounds';

var buildTab = function(i, len) {
	var title = 'round ' + (i + 1);
	if(len === 1) {
		title = 'final';
	} else {
		if (len - i === 1) {
			title = 'semi-final';
		} else if (len - i === 2){
			title = 'quarter-final';
		}
	}
	return title;
};

class Bracket extends React.Component {
	render() {
		var data = this.props.data,
			types = ['winners', 'losers', 'finals'],
			tabs = [];

		var rounds = data.rounds.map(function(round, i){
			tabs.push( buildTab(i, data.rounds.length) );
			return (
				<Rounds key={round._id} data={round} />
			);
		});

		var tab = tabs.map(function(t, i){
			return (
				<li key={t + '_' + i}>{t}</li>
			);
		})
		var jstabclass = data.type === 2 ? '' : ' js-tabs'

		return (
			<article className={'bracket ' + types[data.type]} >
				<div className="bracket-type mobile">{types[data.type] + ' bracket'}</div>
				<ul className={'bracket__headers' + jstabclass }>
					{tab}
				</ul>
				<div className="bracket__rounds js-rounds">
					{rounds}
				</div>
			</article>
		);
	}
};

export default Bracket;