import { Guess,weaponQuery } from "../types/weaponData";

/**
 * Compares a guess and spits out a high/low/right or wrong/right comparison.
 * deep comparison required
 * @param correctWeapon the correct weapon to compare to
 * @param guess the current guess
 */
export default function compareGuess(correctWeapon: Guess, guess:  Guess): Guess{

    const res: Guess = new Guess();

    const [corrWeaponVals, guessVals] = [Object.keys(correctWeapon) as Array<keyof Guess>, Object.entries(guess)];

    //iterate through values to check correctness.


    return res;

}

