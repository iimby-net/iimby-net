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
import ErrorBoundary from './components/error_boundary'

import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { getAppInsights } from './telemetry_service';
import TelemetryProvider from './telemetry_provider';
import { Helmet } from 'react-helmet';

function App() {
  let appInsights = null;

  function traceError(error, errorInfo){
    appInsights.trackException({ error: new Error(`${error} : ${errorInfo}`), severityLevel: SeverityLevel.Error });
  }

  return (
    <div class="mainLayoutWrapper">
      <Helmet>
        <title>iimby.net - Inequality In My Backyard</title>
      </Helmet>
      <Router>
        <TelemetryProvider instrumentationKey="885554b6-0860-4ec5-a67b-120a9a75b93c" after={() => { appInsights = getAppInsights() }}>
          <ErrorBoundary traceError={traceError}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/donate" component={Donate} />
              <Route path="/about" component={About} />
              <Route path="/z/:zip" component={Zip} />
              <Route path="/s/:state/p/:place" component={Place} />
              <Route path="/s/:state" component={State} />
            </Switch>
            <Footer />
          </ErrorBoundary>
        </TelemetryProvider>
      </Router>
    </div>
  );
}

export default App;
