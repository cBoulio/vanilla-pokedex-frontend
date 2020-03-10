import React from "react";
import logo from '../logo.svg';
import {Link} from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

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

const HomePage = () => {

    const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data) return (
    <div>
        <React.Fragment>
    <h1>Pokémon</h1>

    <div className="container">
      {data &&
        data.pokemons &&
        data.pokemons.map((pokemon, index) => (
          <div key={index} className="card">
            <img src={pokemon.image} />
            <div class="card-body">
              <h3>{pokemon.name}</h3>
             
            </div>
          </div>
        ))}
    </div>
  </React.Fragment>




    </div>
  );

  
};
export default HomePage;