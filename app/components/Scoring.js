import React from 'react';
import TopMenu from './TopMenu';

/*import 'sass/globals.scss';
import 'sass/main.scss';
import 'sass/scoring.scss';*/


class Brackets extends React.Component {
	render() {

		var json = [
			{
				"_id": "578d456ab1a870e83b9b92e0",
				"type": 0,
				"bracketId": "578d456ab1a870e83b9b92df",
				"__v": 0,
				"rounds": [
					{
						"_id": "578d456ab1a870e83b9b92d4",
						"round": 1,
						"roundId": "578d456ab1a870e83b9b92d3",
						"__v": 0,
						"games": [
							{
							"_id": "578d456ab1a870e83b9b92cc",
							"team2": {
								"_id": "5786b9028fd4155c45729e3f",
								"teamId": "5786b9028fd4155c45729e3e",
								"seed": 0,
								"teamName": "BoGo",
								"__v": 0,
								"players": ["bo", "go"]
							},
							"team1": {
								"_id": "5786b8e48fd4155c45729e3d",
								"teamId": "5786b8e48fd4155c45729e3c",
								"seed": 0,
								"teamName": "Bogo",
								"__v": 0,
								"players": ["Bo", "Go"]
							},
							"gameId": "578d456ab1a870e83b9b92cb",
							"round": 1,
							"index": 0,
							"gameStatus": 0,
							"__v": 0},
							{
								"_id": "578d456ab1a870e83b9b92ce",
								"team2": {
									"_id": "5787f0ed54183d7843024ded",
									"teamId": "5787f0ed54183d7843024dec",
									"seed": 0,
									"teamName": "FuzzyLogic",
									"__v": 0,
									"players": ["Jezza", "Yosha"]
								},
								"team1": {
									"_id": "5787f08a54183d7843024deb",
									"teamId": "5787f08a54183d7843024dea",
									"seed": 0,
									"teamName": "MyTeam",
									"__v": 0,
									"players": ["Bob", "george"]
								},
								"gameId": "578d456ab1a870e83b9b92cd",
								"round": 1,
								"index": 1,
								"gameStatus": 0,
								"__v": 0},
							{
								"_id": "578d456ab1a870e83b9b92d0",
								"team2": {
									"_id": "5787f20858257f441fc5d635",
									"teamId": "5787f20858257f441fc5d634",
									"seed": 0,
									"teamName": "MasterRace",
									"__v": 0,
									"players": ["PC", "Console"]
								},
								"team1": {
									"_id": "5787f13454183d7843024def",
									"teamId": "5787f13454183d7843024dee",
									"seed": 0,
									"teamName": "RingMe",
									"__v": 0,
									"players": ["Sam", "Frodo"]
								},
								"gameId": "578d456ab1a870e83b9b92cf",
								"round": 1,
								"index": 2,
								"gameStatus": 0,
								"__v": 0},
							{
								"_id": "578d456ab1a870e83b9b92d2",
								"team2": {
									"_id": "5787f588f39555804099870f",
									"teamId": "5787f588f39555804099870e",
									"seed": 0,
									"teamName": "Fury",
									"__v": 0,
									"players": ["F1", "F2"]
								},
								"team1": {
									"_id": "5787f527f39555804099870d",
									"teamId": "5787f527f39555804099870c",
									"seed": 0,
									"teamName": "Mystic",
									"__v": 0,
									"players": ["P1", "P2"]
								},
								"gameId": "578d456ab1a870e83b9b92d1",
								"round": 1,
								"index": 3,
								"gameStatus": 0,
								"__v": 0}
						]
					},
					{
						"_id": "578d456ab1a870e83b9b92da",
						"round": 2,
						"roundId": "578d456ab1a870e83b9b92d9",
						"__v": 0,
						"games": [
							{
								"_id": "578d456ab1a870e83b9b92d6",
								"gameId": "578d456ab1a870e83b9b92d5",
								"round": 2,
								"index": 0,
								"gameStatus": 0,
								"__v": 0
							},
							{
								"_id": "578d456ab1a870e83b9b92d8",
								"gameId": "578d456ab1a870e83b9b92d7",
								"round": 2,
								"index": 1,
								"gameStatus": 0,
								"__v": 0
							}
						]
					},
					{
						"_id": "578d456ab1a870e83b9b92de",
						"round": 3,
						"roundId": "578d456ab1a870e83b9b92dd",
						"__v": 0,
						"games": [
							{
							"_id": "578d456ab1a870e83b9b92dc",
							"gameId": "578d456ab1a870e83b9b92db",
							"round": 3,
							"index": 0,
							"gameStatus": 0,
							"__v": 0
							}
						]
					}
				]
			},
			{
				"_id": "578d456ab1a870e83b9b92f4",
				"type": 1,
				"bracketId": "578d456ab1a870e83b9b92f3",
				"__v": 0,
				"rounds": [{
					"_id": "578d456ab1a870e83b9b92e8",
					"round": 1,
					"roundId": "578d456ab1a870e83b9b92e7",
					"__v": 0,
					"games": [{
						"_id": "578d456ab1a870e83b9b92e2",
						"gameId": "578d456ab1a870e83b9b92e1",
						"round": 1,
						"index": 0,
						"gameStatus": 0,
						"__v": 0
						}, {
						"_id": "578d456ab1a870e83b9b92e4",
						"gameId": "578d456ab1a870e83b9b92e3",
						"round": 1,
						"index": 1,
						"gameStatus": 0,
						"__v": 0
						}, {
							"_id": "578d456ab1a870e83b9b92e6",
							"gameId": "578d456ab1a870e83b9b92e5",
							"round": 1,
							"index": 2,
							"gameStatus": 0,
							"__v": 0
						}]
						}, {
						"_id": "578d456ab1a870e83b9b92ee",
						"round": 2,
						"roundId": "578d456ab1a870e83b9b92ed",
						"__v": 0,
						"games": [{
							"_id": "578d456ab1a870e83b9b92ea",
							"gameId": "578d456ab1a870e83b9b92e9",
							"round": 2,
							"index": 0,
							"gameStatus": 0,
							"__v": 0
						}, {
							"_id": "578d456ab1a870e83b9b92ec",
							"gameId": "578d456ab1a870e83b9b92eb",
							"round": 2,
							"index": 1,
							"gameStatus": 0,
							"__v": 0
						}]
					}, {
						"_id": "578d456ab1a870e83b9b92f2",
						"round": 3,
						"roundId": "578d456ab1a870e83b9b92f1",
						"__v": 0,
						"games": [{
							"_id": "578d456ab1a870e83b9b92f0",
							"gameId": "578d456ab1a870e83b9b92ef",
							"round": 3,
							"index": 0,
							"gameStatus": 0,
							"__v": 0
						}]
					}]
				}, {
				"_id": "578d456ab1a870e83b9b92fa",
				"type": 2,
				"bracketId": "578d456ab1a870e83b9b92f9",
				"__v": 0,
				"rounds": [{
					"_id": "578d456ab1a870e83b9b92f8",
					"round": 1,
					"roundId": "578d456ab1a870e83b9b92f7",
					"__v": 0,
					"games": [{
						"_id": "578d456ab1a870e83b9b92f6",
						"gameId": "578d456ab1a870e83b9b92f5",
						"round": 1,
						"index": 0,
						"gameStatus": 0,
						"__v": 0
					}]
				}]
			}];


		return (
			<div id="Scoring">
				<TopMenu />
				<div className="scoring-container">
					<article className="scoring">
						<section className="scoring__team">
							<h3>{'Go Shuck Yourself'}</h3>
							<div className="scoring__controls">
								<div className="score-total">{'21'}</div>
								<div className="score-toggle">
									<a href="#">{'-'}</a>
									<a href="#">{'+'}</a>
								</div>
								<div className="score-bulls">
									<a href="#">{'Bullseye'}</a>
								</div>
							</div>
						</section>
						<section className="scoring__team">
							<h3>{'Shut Your Cornhole'}</h3>
							<div className="scoring__controls">
								<div className="score-total">{'16'}</div>
								<div className="score-toggle">
									<a href="#">{'-'}</a>
									<a href="#">{'+'}</a>
								</div>
								<div className="score-bulls">
									<a href="#">{'Bullseye'}</a>
								</div>
							</div>
						</section>
					</article>
					<article className="submit">
						<a href="#" className="btn-submit">{'submit game'}</a>
						<a href="#" className="btn-forfeit">{'forfeit game'}</a>
					</article>
				</div>
			</div>
		);
	}
};

export default Brackets;