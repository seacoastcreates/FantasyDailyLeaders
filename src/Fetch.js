import React, { useState } from 'react';

function Fetch() {
	const [data, setData] = useState({})
}

const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));