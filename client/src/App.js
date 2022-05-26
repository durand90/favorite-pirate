import React from 'react';
import './App.css';

import Display from './components/Display';
import Create from './components/Create';
import View from './components/View';

import { Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Switch>
      
      {/* Create */}
      <Route path='/pirate/create'>
        <Create/>
      </Route>

      {/* View */}
      <Route path='/pirate/view/:id'>
        <View/>
      </Route>
      
      {/* Home/Display */}
      <Route path='/'>
      <Display/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
