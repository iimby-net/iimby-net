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
      friendlyName: "",
      stats: {},
      ready: false
    };
  }

  componentDidMount() {
    getCensusData('place:' + this.state.place, 'state:' + this.state.state).then(
      (response) => {
        var friendlyName = response.name.replace(/( city,| zona urbana,)/, ","); 

        this.setState(
          {
            friendlyName: friendlyName,
            stats: response,
            ready: true
          })
      });
  }

  render() {
    if (this.state.ready) {
      return (
        <>
          <Helmet>
            <title>iimby.net - Inequality in {this.state.friendlyName}</title>
          </Helmet>
          <div>
            <h1>Inequality in {this.state.friendlyName}</h1>
            <StatSummary stats={this.state.stats} />
          </div>
        </>);
    } else {
      return <div>Waiting for Census data ...</div>
    }
  }
}

export default Place;