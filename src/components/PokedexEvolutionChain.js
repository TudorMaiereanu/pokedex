import React, { useEffect, useState } from 'react';
import '../App.css';

function PokedexEvolutionChain(props) {
  const { evolutionChainUrl } = props;
  const [evolutionDetails, setEvolutionDetails] = useState(null);
  const [secondEvolutionClass, setSecondEvolutionClass] = useState("second-evolution-hidden");
  const [thirdEvolutionClass, setThirdEvolutionClass] = useState("third-evolution-hidden");


  useEffect(() => {
    if (evolutionChainUrl != null) {
      setEvolutionDetails(null);
      fetch(evolutionChainUrl)
        .then(response => response.json())
        .then(data => {
            setEvolutionDetails(data.chain);
            setSecondEvolutionClass("second-evolution-hidden")
            setThirdEvolutionClass("third-evolution-hidden")
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
          <button className="first-evolution" onClick={() => {
            if (secondEvolutionClass === "second-evolution-hidden") {
              setSecondEvolutionClass("second-evolution");
            } else {
              setSecondEvolutionClass("second-evolution-hidden")
              setThirdEvolutionClass("third-evolution-hidden")
            }
          }}>{'1.' + firstEvolutionObj.name}</button>
          {firstEvolutionObj && firstEvolutionObj.evolutions.map((secondEvolutionObj) => (
            <div>
              <button className={secondEvolutionClass} onClick={() => {
                if (thirdEvolutionClass === "third-evolution-hidden") {
                  setThirdEvolutionClass("third-evolution");
                } else {
                  setThirdEvolutionClass("third-evolution-hidden")
                }
              }}>{'2.' + secondEvolutionObj.name}</button>
              {secondEvolutionObj && secondEvolutionObj.evolutions.map((thirdEvolutionObj) => (
                <button className={thirdEvolutionClass}>{'3.' + thirdEvolutionObj.name}</button>
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