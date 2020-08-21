import React, { Component } from 'react';


import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

