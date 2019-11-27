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
  const [ abilityDetails, setAbilityDetails ] = useState(null);

  return (
    <div className={popoverClass}>
      <PokedexSkillsList details={details}
        setSelectedMoveObj={setSelectedMoveObj}
        setSelectedAbilityObj={setSelectedAbilityObj}
      />
      <PokedexMoveDescription 
        selectedMoveObj={selectedMoveObj} setSelectedMoveObj={setSelectedMoveObj} moveDetails={moveDetails} setMoveDetails={setMoveDetails}
        selectedAbilityObj={selectedAbilityObj} setSelectedAbilityObj={setSelectedAbilityObj} abilityDetails={abilityDetails} setAbilityDetails={setAbilityDetails}
      />
      <PokedexImage details={details}/>
      <PokedexMoveSummary details={details} setPopoverClass={setPopoverClass}
        moveDetails={moveDetails}
        abilityDetails={abilityDetails}
      />
    </div>
  );
}

export default PokedexDetailsPopover;