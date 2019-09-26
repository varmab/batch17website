import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NotFoundPage from './containers/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
    
