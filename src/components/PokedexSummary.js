import React from 'react';
import '../App.css';

const collectStats = (stats) => {
  const statsList = []
  stats.forEach(stat => {
    statsList.push({
      name: stat.stat.name,
      value: stat.base_stat,
    });
  });

  return statsList;
};
function PokedexSummary(props) {
  const { details } = props;
  const statsList = details ? collectStats(details.stats) : [];
  
  return (
    <div className="pokedex-summary">
      {details != null && (
        <>
          <h1>{details.id + "." + details.name}</h1>
          {statsList.map(stat => 
              <p className="pokedex-property">
                {`${stat.name}: ${stat.value}`}
              </p>
          )}
        </>
      )}
    </div>
  );
}

export default PokedexSummary;