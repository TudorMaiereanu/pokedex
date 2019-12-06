import React, { useState, useEffect } from 'react';
import '../../App.css';

const collectStats = (details) => {
  const { stats, base_experience, weight } = details;
  const statsList = [];

  statsList.push({
    name: 'base-experience',
    value: base_experience,
  });

  statsList.push({
    name: 'weight',
    value: weight,
  });

  stats.forEach(stat => {
    statsList.push({
      name: stat.stat.name,
      value: stat.base_stat,
    });
  });

  return statsList;
};

function PokedexSummary(props) {
  const { details, setPopoverClass } = props;
  const [expandButtonClass, setExpandButtonClass] = useState("expand-button-hidden");
  const expandEmojiValue = 0x1F4A2;
  const statsList = details ? collectStats(details) : [];

  useEffect(() => {
    if (details != null) {
      setExpandButtonClass("expand-button");
    }
  }, [details]);
  
  return (
    <div className="pokedex-summary">
      {details != null && (
        <>
          <h1>{details.id + "." + details.name}</h1>
          {statsList.map(stat => 
            <p className="pokedex-stat">
              {`${stat.name}: ${stat.value}`}
            </p>
          )}
        </>
      )}
      <button className={expandButtonClass} onClick={() => setPopoverClass("pokedex-details-popover")}><p>{String.fromCodePoint(expandEmojiValue)}</p></button>
    </div>
  );
}

export default PokedexSummary;