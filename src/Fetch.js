import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Fetch() 	{
	
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

}

export default Fetch;

// points.sort((a,b) => (a.points > b.points) ? 1 : ((b.points > a.points) ? -1 : 0)); 
		// list.sort((a, b) => (a.points > b.points) ? 1 : (a.points === b.points) ? ((a.size > b.size) ? 1 : -1) : -1 )


			// let sortPoints = (points) => {			
		// 	points.sort((a,b) => (a.points > b.points) ? 1 : ((b.points > a.points) ? -1 : 0)); 
		// }