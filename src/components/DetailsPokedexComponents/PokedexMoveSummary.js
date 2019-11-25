import React from 'react';
import '../../App.css';

function PokedexMoveSummary(props) {
  const { moveDetails, setPopoverClass } = props;
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
        value: damage_class.name,
      }, 
      {
        name: "Contest type",
        value: contest_type.name,
      },
      {
        name: "Type",
        value: type.name,
      },
    ];
  }

  return (
    <div className="pokedex-summary">
      {extractedMoveDetails != null && (
        <>
          <h1>{extractedMoveDetails.name}</h1>
          {extractedMoveDetails.map(details => 
              <p className="pokedex-property">
                {`${details.name}: ${details.value}`}
              </p>
          )}
        </>
      )}
      <button className="minimize-button" onClick={() => setPopoverClass("pokedex-details-popover-hidden")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexMoveSummary;