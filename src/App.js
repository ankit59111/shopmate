import React, { Component } from 'react';
import './App.scss';
import Header from "./Header/Header";
import {Banner1} from "./banner1/Banner1";
import {Banner2} from "./banner2/banner2";
import {Banner3} from "./banner3/banner3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner1/>
        <Banner2/>
        <Banner3/>
      </div>
    );
  }
}

export default App;
