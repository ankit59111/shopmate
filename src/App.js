import React, { Component } from 'react';
import bitmap from "./images/bitmap.png"
import './App.scss';
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className={"banner1"}>
            <img srcSet={`${bitmap}`}/>
            <div className="banner1_text">
                <h1>
                    Background and <br/> developmnet
                </h1>
                <p>Convergent the dictates of the <br/> consumer: banckground and <br/> development</p>

                <button type="button" className="button">Check twice</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
