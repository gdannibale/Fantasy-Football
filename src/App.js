import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Teams from "./components/pages/Teams";
import availablePlayers from "./components/pages/availablePlayers";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/teams" component= {Teams} />
        <Route path="/availablePlayers" component= {availablePlayers} />
        <Route path="/Sign-up" component= {SignUp} />

      </Switch>
      </Router>
    </>
  );
}

export default App;
