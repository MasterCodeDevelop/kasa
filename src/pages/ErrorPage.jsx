import React from 'react';
import { Header } from './Layout';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return(
		<>
			<Header />
			<section className='error-page'>
				<h1 className='error-page__title'>404</h1>
				<p className='error-page__text'>Oups! La page que vous demandez n&apos;existe pas.</p>
				<Link className='error-page__link' to="/">
					Retourner sur la page d&apos;accueil
				</Link>
			</section>
		</>
	);
}
