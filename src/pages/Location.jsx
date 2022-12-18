import React, { useEffect, useState } from 'react';
import { getById } from '../functions/api';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
export default function Location(props) {  
	const params = useParams(),
	[data, setData] = useState([]),
	[loading, setLoading] = useState([]),
	[error, setError] = useState(false),
	$then = res => {
		if (res.length !== 1) window.location.pathname='./error-404';
		else {
			setData(res);
			setLoading(false)
		}
	},
	$catch = err => {
		console.log(err);
		setError(err)
		window.location.pathname='./error-404';
	};
	useEffect(()=>{
		if (!error) {
			getById(params.id,$then, $catch);
		}
	}, [error, params])
	console.log(data);
	return (
		<>
			<Loading loading={loading}/>
		</>
	);
}
