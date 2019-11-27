import React, { useEffect, useState } from 'react';
import '../../App.css';

function PokedexMoveDescription(props) {
  const { 
    selectedMoveObj, setSelectedMoveObj, moveDetails, setMoveDetails,
    selectedAbilityObj, setSelectedAbilityObj, abilityDetails, setAbilityDetails,
  } = props;
  const [ moveName, setMoveName] = useState(null);
  const [ abilityName, setAbilityName] = useState(null);

  useEffect(() => {
    if (selectedMoveObj != null) {
      fetch(selectedMoveObj.move.url)
        .then(response => response.json())
        .then(data => {
          setAbilityName(null);
          setAbilityDetails(null);
          setSelectedAbilityObj(null);
          setMoveName(selectedMoveObj.move.name);
          setMoveDetails(data);
        });
    }
  }, [selectedMoveObj]);

  useEffect(() => {
    if (selectedAbilityObj != null) {
      fetch(selectedAbilityObj.ability.url)
        .then(response => response.json())
        .then(data => {
          setMoveDetails(null);
          setMoveName(null);
          setSelectedMoveObj(null);
          setAbilityName(selectedAbilityObj.ability.name);
          setAbilityDetails(data);
        });
    }
  }, [selectedAbilityObj]);

  let moveDescription = null;
  if (moveDetails != null) {
    moveDescription = moveDetails.flavor_text_entries.find(
      entry => entry.language.name === "en"
    ).flavor_text;
  }

  let abilityDescriptionList = null;
  if (abilityDetails != null) {
    abilityDescriptionList = abilityDetails.effect_entries.map(effectObj => effectObj.effect);
  }

  return (
    <div className="pokedex-description">
      {moveName && <p className="pokedex-move-name">{moveName}</p>}
      {abilityName && <p className="pokedex-move-name">{abilityName}</p>}
      {moveDetails && <p>{moveDescription}</p>}
      {abilityDetails && abilityDescriptionList.map(effect => <p>{effect}</p>)}
    </div>
  );
}

export default PokedexMoveDescription;