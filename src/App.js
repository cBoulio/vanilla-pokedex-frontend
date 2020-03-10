import React from 'react';
import logo from './logo.svg';
import NavBar from "./components/navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import HomePage from "./pages/home.page.js";
import PokemonPage from "./pages/pokemon.page.js";
import EditionPage from "./pages/edition.page.js";
import TrainerPage from "./pages/trainer.page";
import RegionsPage from "./pages/region.page";

import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar
          totalItems={0}
      />

    <Router>
      <Switch>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="/home"><HomePage /></Route>

        <Route path="/pokemon"><PokemonPage /></Route>
        <Route path="/editions"><EditionPage /></Route>
        <Route path="/trainers"><TrainerPage /></Route>
        <Route path="/home"><HomePage /></Route>
        <Route path="/regions"><RegionsPage /></Route>
      </Switch>
    </Router>



    
    </div>
  );
}

export default App;
