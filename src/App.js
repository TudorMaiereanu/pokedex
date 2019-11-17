import React, { useEffect, useState } from 'react';

import PokedexList from './components/PokedexList';
import PokedexDescription from './components/PokedexDescription';
import PokedexSummary from './components/PokedexSummary';
import PokedexImage from './components/PokedexImage';
import './App.css';

function App() {
  // This is internal state || Array destructuring
  // [getter, setter] = useState(initialState)
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results);
      });
  }, []);

  useEffect(() => {
    setDetails(null);
    if (selectedPokemon != null) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => {
          setDetails(data);
        });
    }
  }, [selectedPokemon]);
  
  return (
    <div className="pokedex">
      <PokedexList 
        pokemon={pokemon}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokedexDescription selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
      <PokedexImage details={details}/>
      <PokedexSummary details={details}/>
    </div>
  );
}

export default App;
