import React, { useEffect, useState } from 'react';
import '../../App.css';

function PokedexDetailsPopover(props) {
  const { selectedMoveObj } = props;
  const [ moveDetails, setMoveDetails ] = useState(null);
  const [ moveName, setMoveName] = useState(null);

  useEffect(() => {
    if (selectedMoveObj != null) {
      setMoveName(selectedMoveObj.move.name);
      setMoveDetails(null);
      fetch(selectedMoveObj.move.url)
        .then(response => response.json())
        .then(data => {
          setMoveDetails(data);
        });
    }
  }, [selectedMoveObj]);

  let moveDescription = null;
  if (moveDetails != null) {
    moveDescription = moveDetails.flavor_text_entries.find(
      entry => entry.language.name === "en"
    ).flavor_text;
  }

  return (
    <div className="pokedex-description">
      <p className="pokedex-move-name">{moveName}</p>
      <p>{moveDescription}</p>
    </div>
  );
}

export default PokedexDetailsPopover;