/* eslint-disable no-undef */
import React, { Component } from 'react';
import { getAll } from '../functions/api';
class Home extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			error: null,
			data: []
		};
	}
	componentDidMount() {
		const $then = DATA => this.setState({
				loading: false,
				data: DATA
			}),
			$catch = error => this.setState({
				loading: true,
				error
			});
		getAll($then, $catch);
	}
	render() {
		console.log(this.state);
		return(
			<section className="home">
				Home
			</section>
		);
	}
}
export default Home;