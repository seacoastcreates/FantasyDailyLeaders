import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';



function App() {

	const [data, setData] = useState({ teams: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://fantasy.espn.com/apis/v3/games/fba/seasons/2020/segments/0/leagues/64997217?view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mSettings&view=mTeam&view=modular&view=mNav');

			setData(result.data);
			
			const myHeaders = new Headers();
			myHeaders.append(
				'Access-Control-Allow-Origin', '*'
			);

			
		}
		fetchData();
		
	}, []);
	
	let teams = data.teams;
	teams.forEach(teams => {
		let points = teams.points;
		
		
		
		// points.sort(function(a, b){return b - a}); 
		

		console.log(points);
	

		// let sortedPoints = points.sort(function(a,b) {
		// 	return a.points - b.points;
		// });
		// console.log(sortedPoints);
		

		
	});



  return (

    <div className="App container">
      {/* <header className="App-header">
       <h1>NBA FANTASY PLAYER OF THE NIGHT</h1>
      </header> */}
			<main>
				<div className="grid">
				
			
		
				
				
					{data.teams.map(team => (
						<div key={team.id} className="grid-item">
						
							<h2>{team.points}</h2>
							<img src={team.logo} alt="" />
							<h3>{team.location} {team.nickname}</h3>
						</div>

			
					))}	

				



					{/* {data.teams.map(team => (
						<div key={team.id} className="grid-item">
							<h2>{team.points}</h2>
							<img src={team.logo} />
							<h3>{team.location} {team.nickname}</h3>
						</div>
					))} */}

				</div>
			</main>
			<footer></footer>
    </div>
	);
}


export default App;
