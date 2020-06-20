import React, {Component}  from 'react';
import { Link } from "react-router-dom";
import state_list from '../data/states.json'
import place_map from '../data/places.json'
import StatSummary from '../components/stat_summary';
import us_national_values from '../data/us_national_values'

class ZipInput extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        zip: '',
        buttonEnabled: false
      };
    }
  
    handleChange(event) {
      var newValue = event.target.value.replace(/[^0-9]/, '');
      var enabled = (newValue.length === 5)
      this.setState({ zip: newValue, buttonEnabled: enabled });
    }
  
    render() {
  
      var goButton = (<button>Go</button>);
      if (this.state.buttonEnabled) {
        goButton = (<Link to={'/z/' + this.state.zip}><button>Go</button></Link>);
      }
  
      return (
        <div>
          <input type="numeric" maxLength="5" value={this.state.zip} onChange={this.handleChange.bind(this)} />
          {goButton}
        </div>);
    }
  }
  
  class PlaceSelector extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stateId: -1,
        placeId: -1,
        placeList: []
      };
    }
  
    handleStateChange(event) {
      var value = event.target.options[event.target.selectedIndex].text;
      console.log(value);
      var places = [<option value="-1">Entire State</option>];
      places.push(place_map[value].map((p) => (<option value={p.id}>{p.name}</option>)));
      this.setState({
        stateId: event.target.value,
        placeId: -1,
        placeList: places
      });
    }
  
    handlePlaceChange(event) {
      console.log(event.target.text);
      this.setState({
        placeId: event.target.value
      })
    }
  
    render() {
      const stateOptions = state_list.map((s) => (<option value={s.id}>{s.name}</option>));
  
      var goButton = (<button>Go</button>);
      if (this.state.stateId !== -1) {
        if (this.state.placeId !== -1) {
          goButton = (<Link to={'/s/' + this.state.stateId + '/p/' + this.state.placeId}><button>Go</button></Link>);
        } else {
          goButton = (<Link to={'/s/' + this.state.stateId}><button>Go</button></Link>);
        }
      }
  
      return (
        <div>
          <select onChange={this.handleStateChange.bind(this)}>
            <option value="-1">Select State</option>
            {stateOptions}
          </select>
          <select onChange={this.handlePlaceChange.bind(this)}>
            {this.state.placeList}
          </select>
          {goButton}
        </div>);
    }
  }
  
  
  function Home() {
  
    return (
      <>
        <h1>Economic disparity in the neighborhood</h1>
        <div>
          <h2>Compare economic measurements in a zip code</h2>
          <div>
            <ZipInput />
          </div>
        </div>
        <div>
          <h2>Compare economic measurements in a state or city</h2>
          <div>
            <PlaceSelector />
          </div>
        </div>
        <h1>National economic measurements</h1>
        <StatSummary stats={us_national_values} />
      </>);
  }

  export default Home;