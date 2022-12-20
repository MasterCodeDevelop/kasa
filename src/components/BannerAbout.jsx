import React from 'react';
import bannerImg from '../assets/images/banner-about.png';
import bannerImgMobile from '../assets/images/banner-about-mobile.png';

export default function BannerAbout() {
	return (
		<figure className="banner">
			<picture>
				<source
					media="(max-width: 768px)"
					srcSet={bannerImgMobile}
					sizes="768px"
				/>
				<img src={bannerImg} alt="bannière about"/>
			</picture>
		</figure>
	);
}