import React, { useEffect, useState } from 'react';
import PokedexSkillsList from './PokedexSkillsList';
import '../../App.css';

function PokedexDetailsPopover(props) {
  const { details, popoverClass, setPopoverClass } = props;
  const expandEmojiValue = 0x1F4A2;

  return (
    <div className={popoverClass}>
      <PokedexSkillsList details={details}/>
      <button className="minimize-button" onClick={() => setPopoverClass("pokedex-details-popover-hidden")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexDetailsPopover;