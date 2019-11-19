import React from 'react';
import '../../App.css';

function PokedexSkillsList(props) {
  const { details } = props;
  
  return (
    <div className="pokedex-list">
      <p>Moves:</p>
      <ul>
        {details && details.moves.map((moveObj, index)=> {
          const number = String(index + 1).padStart(2, "0");
          return (
            <li key={index}>
              <button><strong>{number}.</strong>{moveObj.move.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// - Accuracy
// - Power
// - Damage_class
// - Contest_type
// - effect_entries
// - flavor_text_entries


export default PokedexSkillsList;