import { useEffect, useState } from "react";

import PokemonTypeTag from "../PokemonTypeTag";

import { FaSync } from "react-icons/fa";

const RandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState<any>({});
  const [generateNewPokemon, setGenerateNewPokemon] = useState(false);

  const getRandomPokemon = async () => {
    const minNumber = 0;
    const maxNumber = 900;

    const randomId = Math.floor(
      Math.random() * (maxNumber - minNumber) + minNumber
    );

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await res.json();

    setRandomPokemon(pokemon);
  };

  useEffect(() => {
    getRandomPokemon();
  }, [generateNewPokemon]);

  return (
    <div className="relative flex flex-col items-center max-w-xs w-full mx-auto mb-auto">
      <button
        onClick={() => setGenerateNewPokemon(!generateNewPokemon)}
        className="absolute right-4 top-4 bg-red-500 rounded-full text-2xl p-2 active:rotate-180 transition-transform duration-200 ease-in-out"
      >
        <FaSync />
      </button>

      <img
        src={randomPokemon?.sprites?.front_default}
        alt={`${randomPokemon?.name} front image`}
        className="w-full"
      />

      <div className="absolute top-2/3 bg-slate-50 rounded-3xl text-slate-900 w-full -z-10 px-4 pt-24 pb-4">
        <p className="font-bold text-2xl text-center">{randomPokemon?.name}</p>

        <div className="py-1" />

        <div className="grid grid-flow-col gap-2 justify-center">
          {randomPokemon?.types?.map((type: any, index: number) => (
            <PokemonTypeTag key={index} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomPokemon;
