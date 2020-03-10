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


import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import './App.css';

const GET_POKEMON_INFO = gql`
{
    pokemons(first: 150) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }`;

function App() {

   const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data) return (
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
