/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery(props) {
	return (
		<ul className='GalleryListe'>  
			{props.data.map( e => (
				<li className='GalleryCard' key={`${e.id}`}>
					<Link to={`/location/${e.id}`} >
						<img className='GalleryCardImg' src={e.cover}/>
						<p className='GalleryCardText'>{e.title}</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
