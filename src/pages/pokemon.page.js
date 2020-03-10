import React from "react";
import logo from '../logo.svg';
import {Link} from "react-router-dom";

const PokemonPage = () => {
  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Pokemon Page
        </a>
      </header>
    </div>
  );
};
export default PokemonPage;