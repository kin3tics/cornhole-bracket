import React from 'react';
import TopMenu from './TopMenu';
import {Link} from 'react-router';
import BracketStore from '../stores/BracketStore';
import Bracket from './Bracket';
import _ from 'lodash';
import $ from 'jquery';
import domUtil from '../utils/domUtil';

import { Events } from'../constants';
var BracketEvents = Events.BracketEvents;

var initMobileBracket = function(el){
	var tabs = el.find('.js-tabs'),
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
	el.find('.active').removeClass('active');
	return false;
};

class Brackets extends React.Component {
	constructor(props) {
	  super(props);
	  this.state= {
    		inBrowser: false,
    		bracket: BracketStore.getBracket()
    	};
    	this.updateState = this.updateState.bind(this);
  	}
	componentWillMount() {
		BracketStore.fetchBracket();
		BracketStore.on(BracketEvents.LOADED, this.updateState);
	}
	componentDidMount() {
		this.setState({inBrowser: true});
		domUtil.customResizeBind();
		$(document).on( 'luau:resize', function(){
			var $el = $('.bracket-container').find('.bracket');
			if ($(window).width() < 551) {
				initMobileBracket($el);
			} else {
				destroyMobileBracket($el);
			}
		});

		$(document).trigger('luau:resize');
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