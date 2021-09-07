import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function PokemonThumbnail({ name }) {
  const [pokemon, setPokemon] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getPokemonData();
  }, []);

  async function getPokemonData() {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(res.data);
  }

  const goTo = () => {
    history.push("/Pokemon", { name: pokemon.name });
  };

  return (
    <div className="card" onClick={goTo}>
      {pokemon.sprites ? (
        <div className="img-container">
          <img
            className="thumbnail-img"
            src={pokemon.sprites.front_default}
            alt={name ? name : ""}
          />
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="card-title">
          <div className="number">
            <small>#0{pokemon.id}</small>
          </div>
          <div className="pokemon-name">
            <span>{pokemon.name}</span>
          </div>
        </div>
        <small>
          Type:{" "}
          {pokemon.types
            ? pokemon.types
                .map((element) => {
                  return element.type.name;
                })
                .join(" - ")
            : ""}
        </small>
      </div>
    </div>
  );
}

export default PokemonThumbnail;
