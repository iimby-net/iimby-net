import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/home'
import Donate from './pages/donate'
import About from './pages/about'
import State from './pages/state'
import Place from './pages/place'
import Zip from './pages/zip'
import Footer from './components/footer'


function App() {
  return (
    <div id="mainLayoutWrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/donate" component={Donate} />
          <Route path="/about" component={About} />
          <Route path="/z/:zip" component={Zip} />
          <Route path="/s/:state/p/:place" component={Place} />
          <Route path="/s/:state" component={State} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
