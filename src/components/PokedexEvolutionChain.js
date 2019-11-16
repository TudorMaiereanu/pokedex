import React, { useEffect, useState } from 'react';
import '../App.css';

function PokedexEvolutionChain(props) {
  const { evolutionChainUrl, setSelectedPokemon } = props;
  const [evolutionDetails, setEvolutionDetails] = useState(null);
  const [secondEvolutionClass, setSecondEvolutionClass] = useState("evolution-hidden");
  const [thirdEvolutionClass, setThirdEvolutionClass] = useState("evolution-hidden");
  const [showMoreFirstEmojiValue, setShowMoreFirstEmojiValue] = useState(0x1F53D);
  const [showMoreSecondEmojiValue, setShowMoreSecondEmojiValue] = useState(0x1F53D);
  const lookIntoEmojiValue = 0x1F50E;

  const getPokemonIdFromSpeciesUrl = (speciesUrl) => {
    return speciesUrl.split("/").slice(-2)[0];
  }

  const onClickFirstEvolution = () => {
    if (secondEvolutionClass === "evolution-hidden") {
      setSecondEvolutionClass("evolution");
      setShowMoreFirstEmojiValue(0x1F53C);
    } else {
      setSecondEvolutionClass("evolution-hidden");
      setThirdEvolutionClass("evolution-hidden");
      setShowMoreFirstEmojiValue(0x1F53D);
      setShowMoreSecondEmojiValue(0x1F53D);
    }
  };

  const onClickSecondEvolution = () => {
    if (thirdEvolutionClass === "evolution-hidden") {
      setThirdEvolutionClass("evolution");
      setShowMoreSecondEmojiValue(0x1F53C);
    } else {
      setThirdEvolutionClass("evolution-hidden");
      setShowMoreSecondEmojiValue(0x1F53D);
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
            setShowMoreFirstEmojiValue(0x1F53D);
            setShowMoreSecondEmojiValue(0x1F53D);
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
        url: evolution.species.url,
        evolutions: [],
      },
    ];

    let secondEvolutions = evolution.evolves_to;

    secondEvolutions.forEach((evolutionObj) => {
      evolutions[0].evolutions.push({
        name: evolutionObj.species.name,
        url: evolutionObj.species.url,
        evolutions: evolutionObj.evolves_to.map(finalEvolutionObj => ({
          name: finalEvolutionObj.species.name,
          url: finalEvolutionObj.species.url,
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
            <button className="evolution" disabled>
              {'1.' + firstEvolutionObj.name}
            </button>
            <button className="look-into-emoji" onClick={() => setSelectedPokemon(getPokemonIdFromSpeciesUrl(firstEvolutionObj.url))}><p>{String.fromCodePoint(lookIntoEmojiValue)}</p></button>
            {firstEvolutionObj.evolutions.length !== 0 && <button className="arrow-emoji" onClick={() => onClickFirstEvolution()}><p>{String.fromCodePoint(showMoreFirstEmojiValue)}</p></button>}
          </div>

          {firstEvolutionObj && firstEvolutionObj.evolutions.map((secondEvolutionObj) => (
            <div>
              <div className="evolution-button-box">
                <button className={secondEvolutionClass} disabled>
                  {'2.' + secondEvolutionObj.name}
                </button>
                <button className="look-into-emoji" onClick={() => setSelectedPokemon(getPokemonIdFromSpeciesUrl(secondEvolutionObj.url))}><p className={secondEvolutionClass}>{String.fromCodePoint(lookIntoEmojiValue)}</p></button>
                {secondEvolutionObj.evolutions.length !== 0 && <button className="arrow-emoji" onClick={() => onClickSecondEvolution()}><p className={secondEvolutionClass}>{String.fromCodePoint(showMoreSecondEmojiValue)}</p></button>}
              </div>

              {secondEvolutionObj && secondEvolutionObj.evolutions.map((thirdEvolutionObj) => (
                <div className="evolution-button-box">
                  <button className={thirdEvolutionClass} disabled>{'3.' + thirdEvolutionObj.name}</button>
                  <button className="look-into-emoji" onClick={() => setSelectedPokemon(getPokemonIdFromSpeciesUrl(thirdEvolutionObj.url))}><p className={thirdEvolutionClass}>{String.fromCodePoint(lookIntoEmojiValue)}</p></button>
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