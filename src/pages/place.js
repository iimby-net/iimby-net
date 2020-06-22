import React, { Component } from 'react';
import StatSummary from '../components/stat_summary';
import getCensusData from '../components/census_api';
import { Helmet } from 'react-helmet';

class Place extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: props.match.params.state,
      place: props.match.params.place,
      stats: {},
      ready: false,
      onError: props.onError
    };
  }

  componentDidMount() {
    getCensusData('place:' + this.state.place, 'state:' + this.state.state).then((response) => {
      this.setState({ state: this.state.state, place: this.state.place, stats: response, ready: true })
    }).catch((error) => {
      this.state.onError(error);
    });
  }
  render() {
    if (this.state.ready) {
      return (
        <>
          <Helmet>
            <title>iimby.net - Inequality in {this.state.stats.name}</title>
          </Helmet>
          <div>
            <h1>Inequality in {this.state.stats.name}</h1>
            <StatSummary stats={this.state.stats} />
          </div>
        </>);
    } else {
      return <div>Waiting...</div>
    }
  }
}

export default Place;