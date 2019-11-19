import React from 'react';
import '../../App.css';

function PokedexSkillsList(props) {
  const { details } = props;
  
  return (
    <div className="pokedex-list">
      <ul>
        {details && details.moves.map((moveObj, index)=> {
          return (
            <li key={index}>
              <button>{moveObj.move.name}</button>
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