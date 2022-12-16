import React from 'react';
import bannerImg from '../assets/images/banner.png';
import bannerImgMobile from '../assets/images/banner-mobile.png';

export default function Banner() {
	return (
		<figure className="banner banner-home">
			<picture>
				<source
					media="(max-width: 650px)"
					srcSet={bannerImgMobile}
					sizes="650px"
				/>
				<img src={bannerImg} alt="Photo de la bannière"/>
			</picture>
			<h1>Chez vous, partout et ailleurs</h1>
		</figure>
	);
}