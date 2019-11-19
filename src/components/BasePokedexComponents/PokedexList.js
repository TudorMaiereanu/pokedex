import React from 'react';
import '../../App.css';

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
                onClick={() => {
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


export default PokedexList;