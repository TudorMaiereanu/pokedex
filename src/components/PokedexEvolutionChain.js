import React, { useEffect, useState } from 'react';
import '../App.css';

function PokedexEvolutionChain(props) {
  const { evolutionChainUrl } = props;
  const [evolutionDetails, setEvolutionDetails] = useState(null);

  useEffect(() => {
    if (evolutionChainUrl != null) {
      setEvolutionDetails(null);
      fetch(evolutionChainUrl)
        .then(response => response.json())
        .then(data => {
            setEvolutionDetails(data.chain);
        });
    }
  }, [evolutionChainUrl]);

  // TO REFACTOR !!!!!
  let evolutions;
  if (evolutionDetails != null) {
    let evolution = evolutionDetails;
    evolutions = [
      {
        name: evolution.species.name,
        evolutions: [],
      },
    ];

    let secondEvolutions = evolution.evolves_to;

    secondEvolutions.forEach((evolutionObj) => {
      evolutions[0].evolutions.push({
        name: evolutionObj.species.name,
        evolutions: evolutionObj.evolves_to.map(finalEvolutionObj => ({
          name: finalEvolutionObj.species.name,
          evolutions: [],
        })),
      });
    });
  }
  

  return (
    <div className="pokedex-evolution">
      <p>Evolutions:</p>
      {evolutions && evolutions.map(firstEvolutionObj => (
        <div>
          <button className="first-evolution">{'1.' + firstEvolutionObj.name}</button>
          {firstEvolutionObj && firstEvolutionObj.evolutions.map((secondEvolutionObj) => (
            <div>
              <button className="second-evolution">{'2.' + secondEvolutionObj.name}</button>
              {secondEvolutionObj && secondEvolutionObj.evolutions.map((thirdEvolutionObj) => (
                <button className="third-evolution">{'3.' + thirdEvolutionObj.name}</button>
              ))}
            </div>
           ) )}

        </div>
      ) )}
    </div>
  );

  // TO REFACTOR !!!!!
}


export default PokedexEvolutionChain;