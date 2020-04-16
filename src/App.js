import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import Contacts from './components/contacts';

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}



export default App;
