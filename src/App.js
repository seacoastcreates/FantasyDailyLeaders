import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';


function App() {
	const [data, setData] = useState({ resultSets: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://stats.nba.com/stats/scoreboardV2/?GameDate=today&LeagueID=00&DayOffset=-1');
			setData(result.data);
			
			const myHeaders = new Headers();
			myHeaders.append(
				'Access-Control-Allow-Origin', '*'
			);

		}
		fetchData();
	}, []);
		


  return (
    <div className="App">
      <header className="App-header">
       <h1>NBA FANTASY PLAYER OF THE NIGHT</h1>
      </header>
			<main>
				<ul>
					{data.resultSets.rowSet}
					{/* {data.resultSets.map(item => (
						<li key={item.rowSet}>
							{item.rowset[2]}
						</li>
					))} */}
				</ul>
			</main>
			<footer></footer>
    </div>
	);
}


export default App;
