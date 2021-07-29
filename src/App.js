import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Footer from './Components/Footer';
import Landing from './Pages/Landing'
import Header from './Components/Header';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default class App extends React.Component{

  render() {
    return(
      <div>
       
          <Header>
          </Header>
        <BrowserRouter>
          <Switch>
            <Route path exact ="/" component = { Landing } />
            <Route path="/about" component = { About } />
            <Route path="/projects" component = { Projects } />
            <Route path="/contact" component = {Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

