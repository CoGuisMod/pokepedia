import Image from "next/image";
import { useEffect, useState } from "react";

import PokemonCard from "../PokemonCard";

function PokemonsGrid() {
  const [pokemonData, setPokemonData] = useState<any>({});

  const [currentLink, setCurrentLink] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextLink, setNextLink] = useState("");
  const [previousLink, setPreviousLink] = useState("");

  const changePokemons = (type: string) => {
    if (type === "previous" && previousLink) {
      setCurrentLink(previousLink);
      setPokemonData(null);
    }
    if (type === "next" && nextLink) {
      setCurrentLink(nextLink);
      setPokemonData(null);
    }
  };

  useEffect(() => {
    if (pokemonData) {
      setNextLink(pokemonData.next);
      setPreviousLink(pokemonData.previous);
    }
  }, [pokemonData]);

  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch(currentLink);
      const data = await res.json();

      setPokemonData(data);
    };

    getPokemons();
  }, [currentLink]);

  console.log(pokemonData);

  return (
    <div>
      <div className="flex justify-center items-center gap-2 text-slate-900">
        <button
          onClick={() => changePokemons("previous")}
          className={`${
            previousLink ? "bg-slate-50" : "bg-slate-400"
          } rounded-md px-2 py-1`}
        >
          Previous
        </button>

        <Image src="/pokeball.png" alt="" width="32" height="32" />

        <button
          onClick={() => changePokemons("next")}
          className={`${
            nextLink ? "bg-slate-50" : "bg-slate-400"
          } rounded-md px-2 py-1`}
        >
          Next
        </button>
      </div>

      <div className="py-2" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
        {pokemonData
          ? pokemonData.results.map((pokemon: any, index: number) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default PokemonsGrid;
