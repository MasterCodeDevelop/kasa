import React, { useEffect, useState } from 'react';
import { getById } from '../functions/api';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Note from '../components/Note';

function Description({data}) {
	const newData = [
		{
			id: 1,
			title: "Description",
			content: data.description
		},
		{
			id: 2,
			title: "Equipements",
			content: data.equipments
		}
	];

	return (
		newData.map(e => <Dropdown data={e} />)
	)
}

export default function Location(props) {  
	const params = useParams(),
	[data, setData] = useState([]),
	[loading, setLoading] = useState([]),
	[error, setError] = useState(false),
	$then = res => {
		if (res.length !== 1) window.location.pathname='./error-404';
		else {
			setData(res[0]);
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
	return (
		<section className="location">
			<Loading loading={loading}/>
			{data.length===0?<></>
			:<div className='location-container'>
				<Carousel data = {data} />
				<div className="location-info">
					<div>
						<h1>{data.title}</h1>
						<p>{data.location}</p>
						<div className="location-info__tags">
							{data.tags.map(tag => <span>{tag}</span>)}
						</div>
					</div>
					<div className="location-info__host">
						<div className="location-info__host--user">
							<h2>{data.host.name}</h2>
							<img src={data.host.picture} alt="" />
						</div>
						<div className="location-info__host--rate">
							<Note note={Number(data.rating)}/>
						</div>
					</div>
				</div>

				<div className="location-info__footer">
					<Description data={data} />
				</div>

			</div>}
		</section>
	);
}
