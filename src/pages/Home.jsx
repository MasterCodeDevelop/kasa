import React, { Component } from 'react';
import { getAll } from '../functions/api';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Loading from '../components/Loading';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }
  componentDidMount() {
    const $then = (DATA) =>
        this.setState({
          loading: false,
          data: DATA,
        }),
      $catch = (error) => {
        this.setState({
          loading: false,
          error,
        });
        console.log(error);
      };
    getAll($then, $catch);
  }
  render() {
    return (
      <section className="home">
        <Banner />
        <Loading loading={this.state.loading} />
        <Gallery data={this.state.data} />
      </section>
    );
  }
}
export default Home;
