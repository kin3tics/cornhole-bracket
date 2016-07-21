import React from 'react';
import TopMenu from './TopMenu';
import {Link} from 'react-router';
import BracketStore from '../stores/BracketStore';
import Bracket from './Bracket';
import _ from 'lodash';
import $ from 'jquery';
import domUtil from '../utils/domUtil';

import { Events } from'../constants';


// import '../sass/globals.scss';
// import '../sass/main.scss';
// import '../sass/bracket.scss';





var BracketEvents = Events.BracketEvents;

var initMobileBracket = function(el){
	
	var el = $('.bracket-container').find('.bracket'),
		tabs = el.find('.js-tabs'),
		rounds = el.find('.js-rounds');
	
	rounds.find('section:eq(0)').addClass('active');
	tabs.find('li:eq(0)').addClass('active');

	tabs.each(function(i){
		var index = i,
			tab = $('li', this);
		tab.on({
			click: function(){
				var x = $(this).index();
				rounds.eq( index ).find('.active').removeClass('active');
				tabs.eq( index ).find('.active').removeClass('active');
				rounds.eq( index ).find('section:eq(' + x + ')').addClass('active');
				$(this).addClass('active');

			}
		})
	});
};

var destroyMobileBracket = function(el){
	$('.bracket-container').find('.active').removeClass('active');
	return false;
};

class Brackets extends React.Component {
	constructor(props) {
	  super(props);
	  this.state= {
    		inBrowser: false,
    		bracket: BracketStore.getBracket(),
    		timer: null
    	};
    	this.updateState = this.updateState.bind(this);
    	this.clearTimer = this.clearTimer.bind(this);
    	this.setTimer = this.setTimer.bind(this);
  	}
	componentWillMount() {
		domUtil.customResizeBind();

		BracketStore.on(BracketEvents.LOADED, this.updateState);
	}
	componentDidMount() {
		//setup refresh timer
		this.setTimer();
		this.setState({inBrowser: true});
		$(document).on( 'luau:resize', function(){
			if ($(window).width() < 551) {
				initMobileBracket();
			} else {
				destroyMobileBracket();
			}
		});

		setTimeout(function(){
			$(document).trigger('luau:resize');
		}, 500);
		
	}
	componentWillUnmount() {
		this.clearTimer();
		BracketStore.off(BracketEvents.LOADED, this.updateState);
	}
	updateState() {
		this.setState({
			bracket: BracketStore.getBracket()
		});
	}
	setTimer() {
		var timer = this.state.timer;
		if (timer) clearTimeout(timer);
		BracketStore.fetchBracket();
		var that = this;
		timer = setTimeout(that.setTimer, 5000);
		this.setState({ timer: timer });
	}
	clearTimer() {
		var timer = this.state.timer;
		if(timer) clearTimeout(timer);
		timer = null;
		this.setState({ timer: timer });
	}
	render() {
		var brackets = <h3>Bracket needs to be generated</h3>
		if(this.state.bracket) {
			brackets = this.state.bracket.map(function(item){
				return (
					<Bracket key={item._id} data={item} />
				);
			});
		}	
		return (
			<div id="Bracket">
				<TopMenu />
				<div className="bracket-container">
					{brackets}
				</div>
			</div>
		);
	}
};

export default Brackets;