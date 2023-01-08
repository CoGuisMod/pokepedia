import { useEffect, useState } from "react";

const PokemonTypeTag = ({ type }: { type: any }) => {
  const [typeColor, setTypeColor] = useState("");

  useEffect(() => {
    if (type.type.name === "normal") {
      setTypeColor("bg-type-normal");
    }
    if (type.type.name === "fire") {
      setTypeColor("bg-type-fire");
    }
    if (type.type.name === "water") {
      setTypeColor("bg-type-water");
    }
    if (type.type.name === "grass") {
      setTypeColor("bg-type-grass");
    }
    if (type.type.name === "electric") {
      setTypeColor("bg-type-electric");
    }
    if (type.type.name === "ice") {
      setTypeColor("bg-type-ice");
    }
    if (type.type.name === "fighting") {
      setTypeColor("bg-type-fighting");
    }
    if (type.type.name === "poison") {
      setTypeColor("bg-type-poison");
    }
    if (type.type.name === "ground") {
      setTypeColor("bg-type-ground");
    }
    if (type.type.name === "flying") {
      setTypeColor("bg-type-flying");
    }
    if (type.type.name === "psychic") {
      setTypeColor("bg-type-psychic");
    }
    if (type.type.name === "bug") {
      setTypeColor("bg-type-bug");
    }
    if (type.type.name === "rock") {
      setTypeColor("bg-type-rock");
    }
    if (type.type.name === "ghost") {
      setTypeColor("bg-type-ghost");
    }
    if (type.type.name === "dark") {
      setTypeColor("bg-type-dark");
    }
    if (type.type.name === "dragon") {
      setTypeColor("bg-type-dragon");
    }
    if (type.type.name === "steel") {
      setTypeColor("bg-type-steel");
    }
    if (type.type.name === "fairy") {
      setTypeColor("bg-type-fairy");
    }
    if (type.type.name === "shadow") {
      setTypeColor("bg-type-shadow");
    }
    if (type.type.name === "unknown") {
      setTypeColor("bg-type-unknown");
    }
  }, [type.type.name]);

  return (
    <div
      className={`${typeColor} rounded-full border border-slate-900 font-medium px-2 py-1`}
    >
      {type.type.name}
    </div>
  );
};

export default PokemonTypeTag;
