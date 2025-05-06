import { gunData, meleeData, weaponData } from "../types/weaponData";
import { getRandomWeapon } from "./randomWeapon";
import { getGunHints, getParsedHints } from "./getHints";
import compareGuess from "./compareGuess";

/**
 * Prelim testing for hints
 */
const randomWeapon:weaponData = getRandomWeapon();
const randomWeapon2: weaponData = getRandomWeapon();
console.log(compareGuess(randomWeapon, randomWeapon2));
