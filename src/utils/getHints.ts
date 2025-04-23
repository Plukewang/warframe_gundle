import { weaponData, hint, meleeHint, gunHint, meleeData, gunData } from "../types/weaponData";

function getHints(randomWeapon: weaponData){

     let weaponHint: hint = {//base weapon hint we will specify into the proper category
            name: randomWeapon.name,
         weaponType: randomWeapon.productCategory,
         faction: "Tenno",
         mastery: randomWeapon.masteryReq,
         description: randomWeapon.description,
         damage: randomWeapon.damagePerShot,
         crit: randomWeapon.criticalChance,
         critDamage: randomWeapon.criticalMultiplier,
         status: randomWeapon.procChance
     };

    return weaponHint;
}

export function getMeleeHints(melee: meleeData): meleeHint{

        //this is a terrible way to get it.
        const baseHint: hint = getHints(melee);
        const meleeWeaponHint: meleeHint = {...baseHint, 
            range: melee.range,
        followThrough: melee.followThrough,
        slamRadius: melee.slamRadius,
        meleeType: ""
        }
    
    return meleeWeaponHint;
}

export function getGunHints(gun:gunData): gunHint{
    const baseHint: hint = getHints(gun);
        const gunWeaponHint: gunHint = {...baseHint, 
            trigger: gun.trigger,
        }
    return gunWeaponHint;
}

export function getParsedHints(data: weaponData): meleeHint | gunHint{
    if(data.productCategory==='Melee'){
        return getMeleeHints(data as meleeData);
    }else{
        return getGunHints(data as gunData);
    }
}
