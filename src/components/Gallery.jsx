import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery({data}) {
	return (
		<ul className='gallery'>  
			{!data
				?<></>
				:data.map( e => (
					<li className='gallery-card' key={`${e.id}`}>
						<Link to={`/location/${e.id}`} >
							<img className='gallery-card__img' src={e.cover} alt={e.title}/>
							<h2 className='gallery-card__title'>{e.title}</h2>
						</Link>
					</li>
				))
			}
		</ul>
	);
}
