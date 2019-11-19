import React, { useEffect, useState } from 'react';

import PokedexList from './components/BasePokedexComponents/PokedexList';
import PokedexDescription from './components/BasePokedexComponents/PokedexDescription';
import PokedexSummary from './components/BasePokedexComponents/PokedexSummary';
import PokedexImage from './components/BasePokedexComponents/PokedexImage';

import PokedexDetailsPopover from './components/DetailsPokedexComponents/PokedexDetailsPopover';
import './App.css';

function App() {
  // This is internal state || Array destructuring
  // [getter, setter] = useState(initialState)
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [details, setDetails] = useState(null);
  const [popoverClass, setPopoverClass] = useState("pokedex-details-popover-hidden");

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
    <>
      {popoverClass === "pokedex-details-popover-hidden"
      ?
        <div className="pokedex">
          <PokedexList
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
          <PokedexDescription selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
          <PokedexImage details={details}/>
          <PokedexSummary details={details} setPopoverClass={setPopoverClass}/>
        </div>
      :
        <PokedexDetailsPopover details={details} popoverClass={popoverClass} setPopoverClass={setPopoverClass}/>
      }
    </>
  );
}

export default App;
