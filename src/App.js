import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const pokemon = [
    { name: "Bulbasaur" },
    { name: "Venusaur" },
    { name: "Ivysaur" },
  ];

  // This is internal state
  const [
    /* getter: */ selectedPokemon, 
    /* setter: */ setSelectedPokemon,
  ] = useState(/* initialState */ null);

  console.log("Pokedex rendering...")

  return (
    <div className="pokedex">
      <div className="pokedex-list">
        <PokedexList 
          pokemon={pokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>
      <div className="pokedex-description"></div>
      <div className="pokedex-image"></div>
      <div className="pokedex-summary"></div>
    </div>
  );
}

function PokedexList(props) {
  const { pokemon, selectedPokemon, setSelectedPokemon } = props;

  return (
    <ul>
      {pokemon.map((p, index)=> {
        const number = String(index + 1).padStart(3, "0");
        const buttonClass = p.name === selectedPokemon ? "active" : null;

        return (
          <li key={p.name}>
            <button 
              className={buttonClass}
              onClick={() => 
              {
                setSelectedPokemon(p.name);
                console.log("Pokemon", p.name, "was selected.")
              }
            }>
              <strong>{number}</strong> {p.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default App;
