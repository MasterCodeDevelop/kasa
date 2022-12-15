import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

function Header() {
	let {pathname} = useLocation();
	return(
		<header className='header'>
			<img src={logo}  className='header-logo' alt="kasa logo" />
			<nav className='header-nav'>
				<ul>
					<li className={pathname == '/'?'active':''}>
						<Link to="/">Accueil</Link>
					</li>
					<li className={pathname == '/about'?'active':''}>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
function Footer() {
	return (
		<footer>
			Footer
		</footer>
	);
}
export default function Layout() {
	return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	);
}