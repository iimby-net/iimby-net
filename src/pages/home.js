import React, { Component } from 'react';
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
      <div>
        <p>The goal of this site is to illustrate the degree of racial inequality on a local level.</p>
        <p>All statistics are queried directly from the 2018 edition of the American Communities Survey published by the Census Bureau. The statistics are estimates based on responses from a sample of the population, so each statistic is an estimate provided with a margin of error (+/- some amount). In order to provide zip level data, the 5 year reports were used, these are an aggregate of responses from 2014-2018 (inclusive), with all dollar values inflation adjusted to 2018 dollars.</p>
      </div>
      <div class="inputPanel">
        <h2>How much inequality is there in your zip code?</h2>
        <div class="inputControl">
          <ZipInput />
        </div>
      </div>
      <div class="inputPanel">
        <h2>How much inequality is there in your state or city?</h2>
        <div class="inputControl">
          <PlaceSelector />
        </div>
      </div>
      <h1>Inequality in the US</h1>
      <StatSummary stats={us_national_values} />
    </>);
}

export default Home;