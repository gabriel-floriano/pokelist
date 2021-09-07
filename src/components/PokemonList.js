import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PokemonThumbnail from "./PokemonThumbnail";
import Pagination from "./Pagination";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    window.url ? window.url : "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    setLoading(true);
    if (!window.url) {
      setCurrentPageUrl("https://pokeapi.co/api/v2/pokemon");
    }
    const res = await axios(
      window.url ? window.url : "https://pokeapi.co/api/v2/pokemon"
    );
    const data = res.data;
    setPokemons(data.results);
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [currentPageUrl, window.url]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
    window.url = nextPageUrl;
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
    window.url = prevPageUrl;
  }

  if (loading) {
    return <div class="loader" />;
  }

  return (
    <React.Fragment>
      <div className="main-container">
        <div className="list-container">
          {pokemons.map((pokemon, index) => (
            <PokemonThumbnail key={index} name={pokemon.name} />
          ))}
        </div>
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : false}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : false}
        />
      </div>
    </React.Fragment>
  );
}

export default PokemonList;
