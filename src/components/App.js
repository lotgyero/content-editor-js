import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Block from './Block';

import PhotoButton from './Button/Photo';
import VideoButton from './Button/Video';

//          <ContentBlock type="Photo" data={logo} />
//          <ContentBlock type="Video" data="https://youtu.be/9bZkp7q19f0" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PhotoButton />
        <VideoButton />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
