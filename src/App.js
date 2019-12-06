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
		let seasonPointTotal = teams.points
		let teamId = teams.id
		let teamName = `${team.location} ${team.nickname}`
		// console.log(teamName);
		let nameObj = []
		nameObj.push({[teamId] : teamName});
		console.log(teamId);
		teams.sort((a, b) => (a.points < b.points) ? 1 : -1);		
		return teamName;
	});


	let schedule = data.schedule;

	schedule.forEach( (matchup) => {
		for (let fantasyTeam in matchup) {
			let fantasyStats = (matchup[fantasyTeam]);
			if (fantasyStats.hasOwnProperty('rosterForMatchupPeriodDelayed')){
				// console.log(fantasyStats);
				let obj = []
				let fantasyPoints = fantasyStats.totalPointsLive;
				let fantasyTeamId = fantasyStats.teamId;
				// return fantasyStats;
				
				obj.push({[fantasyTeamId] : fantasyPoints});
				// console.log(obj);
				
			} 
			

		}
	})


	function makeIt() {

	}

	// let teams = data.teams; 
	
	// teams.forEach( (team) => {
	// 	let teamId = teams.id;	
	// 	console.log(teamId);
	// });

	// function getMatchup(matchups) {

	// }

  return (

    <div className="App container">
			<header>
				<h1>Total Point Leaders</h1>
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
