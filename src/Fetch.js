import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Fetch() 	{
	
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

}

export default Fetch;