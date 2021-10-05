import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Reviews from './Reviews.js'
import AboutMe from './AboutMe.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
