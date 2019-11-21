import React, { useState } from 'react';
import PokedexSkillsList from './PokedexSkillsList';
import PokedexMoveDescription from './PokedexMoveDescription';
import '../../App.css';

function PokedexDetailsPopover(props) {
  const { details, popoverClass, setPopoverClass } = props;
  const [selectedMoveObj, setSelectedMoveObj] = useState(null);
  const expandEmojiValue = 0x1F4A2;

  return (
    <div className={popoverClass}>
      <PokedexSkillsList details={details} setSelectedMoveObj={setSelectedMoveObj}/>
      <PokedexMoveDescription selectedMoveObj={selectedMoveObj}/>
      <button className="minimize-button" onClick={() => setPopoverClass("pokedex-details-popover-hidden")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexDetailsPopover;