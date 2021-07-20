import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Footer from './Components/Footer';
import  Landing  from './Pages/Landing';
import Header from './Components/Header';

class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Header>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/aboutme" component={About} />
            </Switch>
          </Header>
        </div>
          <Footer></Footer>
      </div>
    )
  }
}

export default App; 