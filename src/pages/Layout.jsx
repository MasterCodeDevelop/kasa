import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Header() {
	return(
		<header>
			Header
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Page-404">Page 404</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/location">location</Link>
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