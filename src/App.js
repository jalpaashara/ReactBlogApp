import React from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Food from "./Food";

class App extends React.Component{
  render(){
    return(
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food/:foodid" component={Food}/>
          </Switch>
        </Router>
    );
  }
}

/*
const Car =  ({name}) => <h2>Hi, I am a {name} Car!</h2>

class App extends React.Component {
  render() {
    return (
        <div>
          <Car name="Ford"></Car>
          <Car name="Chevy"></Car>
        </div>)

  }
}
*/

export default App;
