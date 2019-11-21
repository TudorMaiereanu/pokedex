import React from 'react';
import '../App.css';

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

export default PokedexImage;