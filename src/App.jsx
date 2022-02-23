import './App.css';
import React, { useEffect, useState } from 'react';
import DisplayPokemon from './components/displayPokemon';
/* import PokesCards from './components/Cards/PokesCards'; */
import axios from 'axios';

function App() {

  const [pokemon, setpokemon]= useState([
    { name: "bulbasaur", url: 'https://pokeapi.co/api/v2/pokemon/1'}
  ]);

  //getting 20 pokemons
  const get20Pokemons = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) =>{
      console.log(response);
      setpokemon(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  };


  useEffect(() =>{
    get20Pokemons();
  },[]);

  return (
    <div className="app-container">
      <h1>Pokemon with Axios</h1>
      {/* <PokesCards /> */}
      
       <DisplayPokemon pokemon={pokemon}/> 
    </div>
  );
}

export default App;
