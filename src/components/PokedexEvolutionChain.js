import React, { useEffect, useState } from 'react';
import '../App.css';

function PokedexEvolutionChain(props) {
  const { evolutionChainUrl } = props;
  const [evolutionDetails, setEvolutionDetails] = useState(null);
  const [secondEvolutionClass, setSecondEvolutionClass] = useState("evolution-hidden");
  const [thirdEvolutionClass, setThirdEvolutionClass] = useState("evolution-hidden");

  const onClickFirstEvolution = () => {
    if (secondEvolutionClass === "evolution-hidden") {
      setSecondEvolutionClass("evolution");
    } else {
      setSecondEvolutionClass("evolution-hidden")
      setThirdEvolutionClass("evolution-hidden")
    }
  };

  const onClickSecondEvolution = () => {
    if (thirdEvolutionClass === "evolution-hidden") {
      setThirdEvolutionClass("evolution");
    } else {
      setThirdEvolutionClass("evolution-hidden")
    }
  };

  useEffect(() => {
    if (evolutionChainUrl != null) {
      setEvolutionDetails(null);
      fetch(evolutionChainUrl)
        .then(response => response.json())
        .then(data => {
            setEvolutionDetails(data.chain);
            setSecondEvolutionClass("evolution-hidden")
            setThirdEvolutionClass("evolution-hidden")
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
      {evolutions && <p>Evolution chain:</p>}
      {evolutions && evolutions.map(firstEvolutionObj => (
        <div>
          <div className="evolution-button-box">
            <button className="evolution">
              {'1.' + firstEvolutionObj.name}
            </button>
            <button><p className="look-into">&#128270;</p></button>
            <button><p className="look-into" onClick={() => onClickFirstEvolution()}>&#128317;</p></button>
            <button><p className="look-into">&#128316;</p></button>
          </div>

          {firstEvolutionObj && firstEvolutionObj.evolutions.map((secondEvolutionObj) => (
            <div>
              <div className="evolution-button-box">
                <button className={secondEvolutionClass}>
                  {'2.' + secondEvolutionObj.name}
                </button>
                <button><p className="look-into" onClick={() => onClickSecondEvolution()}>&#128317;</p></button>
              </div>

              {secondEvolutionObj && secondEvolutionObj.evolutions.map((thirdEvolutionObj) => (
                <div className="evolution-button-box">
                  <button className={thirdEvolutionClass}>{'3.' + thirdEvolutionObj.name}</button>
                </div>
              ))}

            </div>
           ))}

        </div>
      ))}
    </div>
  );

  // TO REFACTOR !!!!!
}


export default PokedexEvolutionChain;