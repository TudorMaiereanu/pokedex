import React, { useEffect, useState } from 'react';
import '../App.css';

function PokedexDetailsPopover(props) {
  const { details } = props;

  return (
    <div className="pokedex">
      <p>Expanded</p>
    </div>
  );
}

export default PokedexDetailsPopover;