import React, { Component } from 'react';
/* import logo from '../logo.svg'; */
import './App.css';

import Dialog from './containers/Dialog';
import Panel from './containers/Panel';
import EditingSpace from './containers/EditingSpace';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dialog />
        <Panel />
        <EditingSpace />
      </div>
    );
  }
}

export default App;
