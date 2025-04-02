import weaponsData from '../data.json'
import {weaponData, gunData} from '../types/weaponData';
/**
 * Array-fy the data.json and spit out a random weapon.
 */

function getRandomWeapon():weaponData{
    const weaponData = Object.entries(weaponsData.ExportWeapons);
    const arrLen = weaponData.length;

    //make a random int of < arrLen
    const randomWeapon: weaponData = weaponData[Math.floor(Math.random() * arrLen)][1];
    //console.log(<gunData>randomWeapon);// 2nd element is the weapon object.

    return randomWeapon;
}



getRandomWeapon()

