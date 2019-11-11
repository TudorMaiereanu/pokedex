import React, { useEffect, useState } from 'react';
import PokedexEvolutionChain from './PokedexEvolutionChain';
import '../App.css';

function PokedexDescription(props) {
  const { selectedPokemon } = props;
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    if (selectedPokemon != null) {
      setSpeciesDetails(null);
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => {
          setSpeciesDetails(data);
        });
    }
  }, [selectedPokemon]);

  let description = null;
  let url = null;
  if (speciesDetails != null) {
    description = speciesDetails.flavor_text_entries.find(
      entry => entry.language.name === "en"
    ).flavor_text;
    url = speciesDetails.evolution_chain.url;
  }

  return (
    <div className="pokedex-description">
      <p>{description}</p>
      <PokedexEvolutionChain evolutionChainUrl={url} />
    </div>
  );
}


export default PokedexDescription;