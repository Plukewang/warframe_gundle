import { gunData, meleeData, weaponData } from "../types/weaponData";
import { getRandomWeapon } from "./getWeapons";
import { getGunHints, getParsedHints } from "./getHints";
import compareGuess from "./compareGuess";
import { queryWeapon } from "../fetch";
/**
 * Prelim testing for hints
 */

console.log(await queryWeapon('Praedos'));
