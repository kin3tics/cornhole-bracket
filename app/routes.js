import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Admin from './components/Admin';
import Bracket from './components/Bracket';
import Game from './components/Game';
import Brackets from './components/Brackets';
import Scoring from './components/Scoring';

export default (
	<Route component={App}>
		<Route path='/' component={Home} />
		<Route path='/admin' component={Admin} />
		<Route path='/game/:gameId' component={Game} />
		<Route path='/bracket' component={Brackets} />
		<Route path='/scoring' component={Scoring} />
	</Route>
);