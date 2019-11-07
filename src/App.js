import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  // This is internal state || Array destructuring
  // [getter, setter] = useState(initialState)
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [details, setDetails] = useState(null);

  console.log("Pokedex rendering...")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
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
      <div className="pokedex-description"></div>
      <PokedexImage 
        details={details}
      />
      <PokedexSummary 
        details={details}
      />
    </div>
  );
}

function PokedexList(props) {
  const { pokemon, selectedPokemon, setSelectedPokemon } = props;

  return (
    <div className="pokedex-list">
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
    </div>
  );
}

function PokedexImage(props) {
  const { details } = props;

  return (
    <div className="pokedex-image">
      {details != null && (
        <img
          src={details.sprites.front_default}
          alt={details.name}
          width="288"
          height="288"
        />
      )}
    </div>
  );
}

function PokedexSummary(props) {
  const { details } = props;

  return (
    <div className="pokedex-summary">
      {details != null && (
        <div>
          <h1>{details.name}</h1>
          <p>NUMBER: {details.id.toString().padStart(3, "0")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
