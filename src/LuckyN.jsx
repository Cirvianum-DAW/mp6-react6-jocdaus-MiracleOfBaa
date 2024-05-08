
import React, { useState } from 'react';
import { getTirades, sum } from './utils';
import Dice from './Dice';

const LuckyN = ({ numDaus = 3 }) => {
  // Una variable "dice" que conté l'array de valors dels daus (generat amb getTirades).
  const [dice, setDice] = useState(getTirades(numDaus));
  // Una variable "guess" que conté el valor de la suma que l'usuari ha de fer i
  // que volem que es pugui canviar amb un input.
  const [guess, setGuess] = useState(1);

  // Una variable "isWinner" que comprova si la suma dels valors dels daus és igual a "guess".
  const isWinner = sum(dice) == guess;

  const handleClick = () => {
    setDice(getTirades(numDaus));
    console.log(sum(dice), guess);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <main>
      <h1 className="mt-3 text-center text-xl text-blue-500">
        Prova Sort! La suma ha de donar {guess}!
      </h1>
      <label>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          className="mx-auto mt-3 block rounded border border-gray-300 px-4 py-2 text-blue-500"
        />
      </label>
      {isWinner ? (
        <p className="text-center text-2xl text-green-500">Has guanyat!</p>
      ) : null}
      <Dice dice={dice} />
      <button
        className="mx-auto mt-3 block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        Tirar els daus!
      </button>
    </main>
  );
};

export default LuckyN;
