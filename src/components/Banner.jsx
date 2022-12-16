import React from 'react';
import bannerImg from '../assets/images/banner.png';

export default function Banner() {
	return (
		<figure className="banner">
			<img src={bannerImg} alt="Photo de la bannière"/>
			<h1>Chez vous, partout et ailleurs</h1>
		</figure>
	);
}