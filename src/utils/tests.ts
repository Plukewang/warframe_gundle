import { gunData, meleeData, weaponData } from "../types/weaponData";
import { getRandomWeapon } from "./randomWeapon";
import { getGunHints, getParsedHints } from "./getHints";

/**
 * Prelim testing for hints
 */
const randomWeapon:weaponData = getRandomWeapon();
console.log(getParsedHints(randomWeapon));
