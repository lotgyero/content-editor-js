import React, { Component } from 'react';
/* import logo from '../logo.svg'; */
import '../App.css';

import Dialog from '../containers/Dialog';
import Panel from '../containers/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dialog />
        <Panel />
      </div>
    );
  }
}

export default App;
