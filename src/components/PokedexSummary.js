import React from 'react';
import '../App.css';

function PokedexSummary(props) {
  const { details } = props;
  
  return (
    <div className="pokedex-summary">
      {details != null && (
        <>
          <h1>{details.name}</h1>
          <p>NUMBER: {details.id.toString().padStart(3, "0")}</p>
        </>
      )}
    </div>
  );
}

export default PokedexSummary;