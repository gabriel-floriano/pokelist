import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PokemonProfile() {
  const [pokemon, setPokemon] = useState([]);
  const [species, setSpecies] = useState([]);
  const location = useLocation();
  const name = location.state.name;

  useEffect(() => {
    getPokemonData();
  }, []);

  async function getPokemonData() {
    await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then((content) => {
      setPokemon(content.data);
    });
    await axios(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(
      (content) => {
        setSpecies(content.data);
      }
    );
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-header-info">
          <small className="pokemon-type">
            Type:{" "}
            {pokemon.types
              ? pokemon.types
                  .map((element) => {
                    return element.type.name;
                  })
                  .join(" - ")
              : ""}
          </small>
          <small className="pokemon-genera">
            {species.genera ? species.genera[7].genus : ""}
          </small>
        </span>
      </div>
      <div className="profile-img-container">
        <img
          className="profile-img front_default"
          src={pokemon.sprites ? pokemon.sprites.front_default : ""}
          alt={name ? name : ""}
        />
        <img
          className="profile-img back_default"
          src={pokemon.sprites ? pokemon.sprites.back_default : ""}
          alt={name ? name : ""}
        />
        <img
          className="profile-img front_shiny"
          src={pokemon.sprites ? pokemon.sprites.front_shiny : ""}
          alt={name ? name : ""}
        />
        <img
          className="profile-img back_shiny"
          src={pokemon.sprites ? pokemon.sprites.back_shiny : ""}
          alt={name ? name : ""}
        />
        <div className="stats-container">
          <h3>Stats</h3>
          <div className="stats-flex">
            {pokemon.stats
              ? pokemon.stats.map((element) => {
                  return (
                    <div className="stats-card">
                      <div className="stats-card-header">
                        {element.stat.name}
                      </div>
                      <div className="stats-card-content">
                        {element.base_stat}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <div className="profile-card-container">
        <div className="content-card abilities">
          <div className="content-card-header"> Abilities </div>
          <div className="content-card-container">
            {pokemon.abilities ? (
              pokemon.abilities.map((element) => {
                return element.is_hidden ? (
                  <div className="ability-text">
                    <span>{element.ability.name}</span>
                    <small>Hidden ability</small>
                  </div>
                ) : (
                  <span className="ability-text">{element.ability.name}</span>
                );
              })
            ) : (
              <span>Unknow</span>
            )}
          </div>
        </div>
        <div className="content-card egg">
          <div className="content-card-header"> Egg Groups </div>
          <div className="content-card-container">
            {species.egg_groups ? (
              species.egg_groups.map((element) => {
                return <span>{element.name}</span>;
              })
            ) : (
              <span>Unknow</span>
            )}
          </div>
        </div>
        <div className="height-weight-container">
          <div className="content-card height">
            <div className="content-card-header"> Height </div>
            <div className="content-card-container">
              {pokemon.height ? (
                <span>{pokemon.height * 10} cm</span>
              ) : (
                <span>Unknow</span>
              )}
            </div>
          </div>
          <div className="content-card weight">
            <div className="content-card-header"> Weight </div>
            <div className="content-card-container">
              {pokemon.weight ? (
                <span>{pokemon.weight / 10} kg</span>
              ) : (
                <span>Unknow</span>
              )}
            </div>
          </div>
        </div>
        <div className="content-card shape">
          <div className="content-card-header"> Shape </div>
          <div className="content-card-container">
            {species.shape ? (
              <span>{species.shape.name}</span>
            ) : (
              <span>Unknow</span>
            )}
          </div>
        </div>
        <div className="content-card habitat">
          <div className="content-card-header"> Habitat </div>
          <div className="content-card-container">
            {species.habitat ? (
              <span>{species.habitat.name}</span>
            ) : (
              <span>Unknow</span>
            )}
          </div>
        </div>
        <div className="content-card description">
          <div className="content-card-header"> Description </div>
          <div className="content-card-container">
            {species.flavor_text_entries ? (
              species.flavor_text_entries[10].flavor_text
            ) : (
              <span>Unknow</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
