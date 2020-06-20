import React, {Component} from 'react';
import StatSummary from '../components/stat_summary';
import getCensusData from './census_api';

class Zip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: props.match.params.zip,
      stats: {},
      ready: false
    };
  }

  componentDidMount() {
    getCensusData('zip%20code%20tabulation%20area:' + this.state.zip).then((response) => {
      this.setState({ zip: this.state.zip, stats: response, ready:true })
    });
  }
  render() {
    if (this.state.ready){
      return (
      <div>
        <h1>Economic disparity in zip {this.state.zip}</h1>
        <StatSummary stats={this.state.stats} />
      </div>);
    }else{
      return <div>Waiting...</div>
    }
  }
}

export default Zip;