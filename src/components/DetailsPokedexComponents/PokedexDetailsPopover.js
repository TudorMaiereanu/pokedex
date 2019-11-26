import React, { useState } from 'react';
import PokedexSkillsList from './PokedexSkillsList';
import PokedexMoveDescription from './PokedexMoveDescription';
import PokedexImage from '../PokedexImage';
import PokedexMoveSummary from './PokedexMoveSummary';
import '../../App.css';

function PokedexDetailsPopover(props) {
  const { details, popoverClass, setPopoverClass } = props;
  const [selectedMoveObj, setSelectedMoveObj] = useState(null);
  const [selectedAbilityObj, setSelectedAbilityObj] = useState(null);
  const [ moveDetails, setMoveDetails ] = useState(null);

  return (
    <div className={popoverClass}>
      <PokedexSkillsList details={details} setSelectedMoveObj={setSelectedMoveObj} setSelectedAbilityObj={setSelectedAbilityObj}/>
      <PokedexMoveDescription selectedMoveObj={selectedMoveObj} moveDetails={moveDetails} setMoveDetails={setMoveDetails}/>
      <PokedexImage details={details}/>
      <PokedexMoveSummary details={details} setPopoverClass={setPopoverClass} selectedMoveObj={selectedMoveObj} moveDetails={moveDetails}/>
    </div>
  );
}

export default PokedexDetailsPopover;