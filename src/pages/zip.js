import React, { Component } from 'react';
import StatSummary from '../components/stat_summary';
import getCensusData from '../components/census_api';
import { Helmet } from 'react-helmet';

class Zip extends Component {
  constructor(props) {
    super(props);

    console.log(props.location);

    this.state = {
      zip: props.match.params.zip,
      stats: {},
      ready: false,
      onError: props.onError
    };
  }

  componentDidMount() {
    getCensusData('zip%20code%20tabulation%20area:' + this.state.zip).then((response) => {
      this.setState({ zip: this.state.zip, stats: response, ready: true })
    }).catch((error) => {
      this.state.onError(error);
    });
  }
  render() {
    if (this.state.ready) {
      return (
        <>
          <Helmet>
            <title>iimby.net - Inequality in {this.state.zip}</title>
          </Helmet>
          <div>
            <h1>Inequality in {this.state.zip}</h1>
            <StatSummary stats={this.state.stats} />
          </div>
        </>);
    } else {
      return <div>Waiting...</div>
    }
  }
}

export default Zip;