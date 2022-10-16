import { useState, useEffect } from "react";

import { getOptionsForVote } from "@/utils/getRandomPokemon";

const Home = () => {
  const [first, second] = getOptionsForVote();
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);

  useEffect(() => {
    setFirstPokemon(first);
    setSecondPokemon(second);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-800">{firstPokemon}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-800">{secondPokemon}</div>
      </div>
    </div>
  );
};

export default Home;
