import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import About from './pages/About';
import Location from './pages/Location';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/location" element={<Location />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
