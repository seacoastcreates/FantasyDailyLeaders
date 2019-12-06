import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
// import { Fetch } from './Fetch'


function App() {

	const [data, setData] = useState({ 
		teams: [], 
		schedule: [] 
	});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://fantasy.espn.com/apis/v3/games/fba/seasons/2020/segments/0/leagues/64997217?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam');

			setData(result.data);

			const myHeaders = new Headers();
			myHeaders.append(
				'Access-Control-Allow-Origin', '*'
			);

		}
		fetchData();
		
	}, []);

	
	let teams = data.teams;

	teams.forEach( (team) => {
		let seasonPointTotal = teams.points;	

		teams.sort((a, b) => (a.points < b.points) ? 1 : -1);		
	});


	let schedule = data.schedule;

	schedule.forEach( (matchup) => {
		for (let fantasyTeam in matchup) {
			let fantasyStats = (matchup[fantasyTeam]);
			if (fantasyStats.hasOwnProperty('rosterForMatchupPeriodDelayed')){
				// console.log(fantasyStats);
				let fantasyPoints = fantasyStats.totalPointsLive;
				let fantasyTeamID = fantasyStats.teamId;
				// return fantasyStats;
				console.log(fantasyPoints, fantasyTeam, fantasyTeamID);
			} 
			

		}
	})

	function makeIt(fantasyStats) {

	}


	// function getMatchup(matchups) {

	// }

  return (

    <div className="App container">
			<header>
				<h1>Weekly Fantasy Leaders</h1>
			</header> 
			<main>
				<div className="grid">
					{data.teams.map(team => (
						<div key={team.id} className="grid-item">
							<h2></h2>
							<img src={team.logo} alt="" />
							<h3>{team.location} {team.nickname}</h3>
							<h4>Season Total: {team.points}</h4>
						</div>
					))}	
				</div>
			</main>
			<footer></footer>
    </div>
	);
}


export default App;
