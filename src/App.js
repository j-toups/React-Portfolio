import React from 'react';
import { BrowserRouter as Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
// import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import Header from './Components/Header';
import Projects from './Pages/Projects';

export default class App extends React.Component{

  render() {
    return(
      <div>
       
          <Header>
          </Header>
        
          <Switch>
            <Route path="/" component = { Landing } />
            <Route path="/about" component = { About}  />
            <Route path="/projects" component = { Projects } />
          </Switch>
        
      </div>
    )
  }
}

