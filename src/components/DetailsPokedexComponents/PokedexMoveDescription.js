import React, { useEffect, useState } from 'react';
import PokedexSkillsList from './PokedexSkillsList';
import PokedexImage from '../BasePokedexComponents/PokedexImage';
import '../../App.css';

function PokedexDetailsPopover(props) {
  const { details } = props;

  return (
    <div className="pokedex-description">
      <p>description</p>
    </div>
  );
}

export default PokedexDetailsPopover;