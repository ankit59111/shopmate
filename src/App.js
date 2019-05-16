import React, { Component } from 'react';
import './App.scss';
import  "./Header/Header.scss";
import {Banner1} from "./banner1/Banner1";
import {Banner2} from "./banner2/banner2";
import {Banner3} from "./banner3/banner3";
import {Banner4} from "./banner4/banner4";
import {Banner5} from "./banner5/banner5";
import {RegisterHeader} from "./RegisterHeader/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterHeader/>
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4/>
        <Banner5/>
      </div>
    );
  }
}

export default App;
