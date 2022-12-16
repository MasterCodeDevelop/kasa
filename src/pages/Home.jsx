/* eslint-disable no-undef */
import React, { Component } from 'react';
import { getAll } from '../functions/api';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

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
		return(
			<section className="home">
				<Banner/>
				<Gallery data={this.state.data} />
			</section>
		);
	}
}
export default Home;