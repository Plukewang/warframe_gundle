import { guessCorrectness, gunData, gunGuessCorrectness, meleeData, meleeGuessCorrectness, weaponData } from "../types/weaponData";

/**
 * Compares a guess and spits out a high/low/right or wrong/right comparison.
 * deep comparison required
 * @param correctWeapon the correct weapon to compare to
 * @param guess the current guess
 */
export default function compareGuess(correctWeapon: weaponData, guess:  weaponData): guessCorrectness | meleeGuessCorrectness | gunGuessCorrectness{

    //just hardcode the comparisons at this point. A clever solution isn't worth it.
    //1 = right, 0 = low, 2 = high
    const compareNums=(num1: number, num2: number): 0|1|2=>{
        //encapsulate this comparison here.
        if(num1===num2){
            return 1; 
        }else if (num1>num2){
            return 2;
        }else return 0;
    }

    const compareDamages=(damage1: number[], damage2: number[]): number[]=>{
        //both arrays have same length
        let res = [];
        for(let i=0;i<damage1.length;i++){
            res.push(compareNums(damage1[i], damage2[i]))
        }
        return res;
    }

    const comparison: guessCorrectness = {
        name: correctWeapon.name===guess.name? 1: 0,
        damagePerShot: compareDamages(correctWeapon.damagePerShot, guess.damagePerShot),
        totalDamage: compareNums(correctWeapon.totalDamage, guess.totalDamage),
        criticalChance: compareNums(correctWeapon.criticalChance, guess.criticalChance),
        criticalMultiplier: compareNums(correctWeapon.criticalMultiplier, guess.criticalMultiplier),
        procChance: compareNums(correctWeapon.procChance, guess.procChance),
        fireRate: compareNums(correctWeapon.fireRate, guess.fireRate),
        masteryReq: compareNums(correctWeapon.masteryReq, guess.masteryReq),
        productCategory: correctWeapon.productCategory===guess.productCategory? 1:0,
        omegaAttenuation: compareNums(correctWeapon.totalDamage, guess.totalDamage),
    }

    return comparison;
}

