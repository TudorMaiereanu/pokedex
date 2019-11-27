import React from 'react';
import '../../App.css';

function PokedexMoveSummary(props) {
  const { moveDetails, abilityDetails, setPopoverClass } = props;
  const expandEmojiValue = 0x1F4A2;

  let extractedMoveDetails = null;
  if (moveDetails != null) {
    const {
      accuracy, power, pp, damage_class, contest_type, type
    } = moveDetails;
    extractedMoveDetails = [
      {
        name: "Accuracy",
        value: accuracy,
      },
      {
        name: "Power",
        value: power,
      }, 
      {
        name: "Power Points",
        value: pp,
      },
      {
        name: "Damage Class",
        value: damage_class ? damage_class.name : null,
      }, 
      {
        name: "Contest type",
        value: contest_type ? contest_type.name : null,
      },
      {
        name: "Type",
        value: type ? type.name : null,
      },
    ];
  }

  let extractedShortEffect = null;
  if (abilityDetails != null) {
    const { effect_entries } = abilityDetails;
    extractedShortEffect = effect_entries.map(effectObj => effectObj.short_effect);
  }

  return (
    <div className="pokedex-summary">
      {extractedMoveDetails != null && (
        <>
          <h1>{extractedMoveDetails.name}</h1>
          {extractedMoveDetails.map(details => 
            details.value
              ?
                <p className="pokedex-stat">
                  {`${details.name}: ${details.value}`}
                </p>
              :
                null
          )}
        </>
      )}
      {extractedShortEffect != null && (
        <>
          <p className="pokedex-summary-effect-text">Effect: </p>
          {extractedShortEffect.map(effect => <p className="pokedex-summary-effect">{effect}</p>)}
        </>
      )}
      <button className="minimize-button" onClick={() => setPopoverClass("pokedex-details-popover-hidden")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexMoveSummary;