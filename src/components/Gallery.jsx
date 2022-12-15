/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery(props) {
	return (
		<ul className='gallery'>  
			{props.data.map( e => (
				<li className='gallery-card' key={`${e.id}`}>
					<Link to={`/location/${e.id}`} >
						<img className='gallery-card__img' src={e.cover}/>
						<h2 className='gallery-card__title'>{e.title}</h2>
					</Link>
				</li>
			))}
		</ul>
	);
}
