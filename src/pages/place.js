import React, {Component}  from 'react';
import StatSummary from '../components/stat_summary';
import getCensusData from './census_api';

class Place extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        state: props.match.params.state,
        place: props.match.params.place,
        stats: {},
        ready: false
      };
    }
  
    componentDidMount() {
      getCensusData('place:' + this.state.place, 'state:' + this.state.state).then((response) => {
        this.setState({ state: this.state.state, place: this.state.place, stats: response, ready:true })
      });
    }
    render() {
      if (this.state.ready){
        return (
        <div>
          <h1>Economic disparity in {this.state.stats.name}</h1>
          <StatSummary stats={this.state.stats} />
        </div>);
      }else{
        return <div>Waiting...</div>
      }
    }
  }

  export default Place;