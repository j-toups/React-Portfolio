import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import Header from './Components/Header';
import  Project from './Pages/Project';

export default class App extends React.Component{

  constructor(){
    super();
    this.state ={
      name: 'React'
    }
  }
  render () {
    return(
      <Router>
        
          <div>
            <Header>
              <Switch>
                <Route path="/" component = {Landing} />
                <Route path="/about" component = {About} />
                <Route path="/project" component = {Project} />
              </Switch>
            </Header>
            <Footer></Footer>
          </div>
      </Router>
    )
  }
}

