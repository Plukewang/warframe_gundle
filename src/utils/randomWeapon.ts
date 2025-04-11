import weaponsData from '../data.json'
import {weaponData} from '../types/weaponData';
/**
 * Array-fy the data.json and spit out a random weapon.
 * 
 */

function getRandomWeapon():weaponData{
    const endPoint = 599;
    const weaponData = Object.entries(weaponsData.ExportWeapons);

    //make a random int of < arrLen
    const randomWeapon = weaponData[Math.floor(Math.random() * endPoint)][1];
    //console.log(<gunData>randomWeapon);// 2nd element is the weapon object.
    console.log(randomWeapon)
    return randomWeapon;
}



getRandomWeapon()



