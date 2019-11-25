import React from 'react';
import '../../App.css';

function PokedexSummary(props) {
  const { moveDetails, setPopoverClass } = props;
  const expandEmojiValue = 0x1F4A2;

  // useEffect(() => {
  //   if (details != null) {
  //     setExpandButtonClass("expand-button");
  //   }
  // }, [details]);

  let extractedMoveDetails = null;
  if (moveDetails != null) {
    extractedMoveDetails = moveDetails.accuracy;
  }

  return (
    <div className="pokedex-summary">
      <p>{extractedMoveDetails}</p>
      <button className="minimize-button" onClick={() => setPopoverClass("pokedex-details-popover-hidden")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexSummary;