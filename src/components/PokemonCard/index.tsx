import { useEffect, useState } from "react";
import PokemonTypeTag from "../PokemonTypeTag";

const PokemonCard = ({ pokemon }: any) => {
  const [pokemonData, setPokemonData] = useState(pokemon);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(pokemonData.url);
      const data = await res.json();

      setPokemonData(data);
    };

    getPokemon();
  }, [pokemon]);

  return (
    <div className="bg-slate-50 rounded-lg text-slate-900 hover:-translate-y-1 transition-transform duration-200 ease-in-out">
      <img
        src={pokemonData.sprites?.front_default}
        alt={`${pokemonData?.name} front image`}
        className="w-full"
      />
      <div className="p-2">
        <p className="font-medium text-lg text-center">{pokemonData.name}</p>
        <div className="grid grid-flow-col gap-2 justify-center">
          {pokemonData?.types?.map((type: any, index: number) => (
            <PokemonTypeTag key={index} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
