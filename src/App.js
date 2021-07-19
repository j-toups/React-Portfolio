import React, { Component } from 'react';
import './App.css';
import About from "./Pages/About";
import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import Header from './Components/Header';

class App extends Component{
  render(){
    return(
      <div>
        <div>
          <Header></Header>
          <div>
            <About></About>
            <Landing></Landing>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 