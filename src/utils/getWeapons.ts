import weaponsData from '../data.json'
import { queryWeapon } from '../fetch';
import {Guess,  weaponQuery} from '../types/weaponData';
/**
 * Array-fy the data.json and spit out a random weapon.
 * 
 */

/**export function getRandomWeapon():gunData | meleeData{
    const endPoint = 599;
    const weaponData = Object.entries(weaponsData.ExportWeapons);

    //make a random int of < arrLen
    const randomWeapon = weaponData[Math.floor(Math.random() * endPoint)][1];
    //console.log(<gunData>randomWeapon);// 2nd element is the weapon object.

    if(randomWeapon.productCategory==='Melee'){
        return randomWeapon as meleeData;
    }
    return randomWeapon as gunData;
} */

function getRandomWeaponName(): string{
    const end = 599;
    
    return Object.entries(weaponsData.ExportWeapons)[Math.floor(Math.random() * end)][1].name;
}

export async function fetchRandomWeapon(): Promise<Guess>{
    try{
        const res = await queryWeapon(getRandomWeaponName());
        return new Guess(
            res.name,
            res.productCategory,
            res.releaseDate.split('-'),
            res.masteryReq,
            res.tags,
            res.isPrime,
            res.damage,
            res.wikiaThumbnail,
        )
    }catch(e){
        console.error(e);
        return Promise.reject(e);
    }
}

export async function fetchGuess(guess: string): Promise<Guess>{
    try{
        const res = await queryWeapon(guess);
        console.log(res.wikiaThumbnail)
        return {
            name: res.name,
            category: res.productCategory,
            introduced: res.releaseDate.split('-'),
            masteryReq: res.masteryReq,
            tags: res.tags,
            isPrime: res.isPrime,
            damage: res.damage,
            imgSrc: res.wikiaThumbnail,
        } as Guess
    }catch(e){
        console.error(e);
        return Promise.reject(e);
    }
}




