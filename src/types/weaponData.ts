/**
 * Type definitions for Public Export's data
 */

/** Generic weaponData interface */
export interface weaponData{
    name: string;
    uniqueName: string;
    codexSecret: boolean;
    damagePerShot: number[];
    totalDamage: number;
    description: string;
    criticalChance: number;
    criticalMultiplier: number;
    procChance: number;
    fireRate: number;
    masteryReq: number;
    productCategory: string;
    omegaAttenuation: number;
}

export interface gunData extends weaponData{
    slot: number;
    noise: string;
    trigger: string;
    magazineSize: number;
    reloadTime: number;
    multishot: number;
}

export interface meleeData extends weaponData{
    blockingAngle: number;
    comboDuration: number;
    followThrough: number;
    range: number;
    slamAttack: number;
    slamRadialDamage: number;
    slamRadius:number;
    slideAttack:number;
    heavyAttackDamage: number;
    heavySlamAttack: number;
    heavySlamRadialDamage: number;
    heavySlamRadius:number;
    windUp:number;
}

export interface hint{
    name:string;
    weaponType: string;
    faction: string;
    mastery: number;
    description: string;
    damage: Array<number>;
    crit: number;
    critDamage: number;
    status: number;
}

export interface gunHint extends hint{
    trigger: string;
}

export interface meleeHint extends hint{
    range: number;
    followThrough: number;
    slamRadius: number;
    meleeType: string;
}

export interface guessCorrectness{
    name: 0|1;
    damagePerShot: number[];
    totalDamage: 0|1|2;
    criticalChance: 0|1|2;
    criticalMultiplier: 0|1|2;
    procChance: 0|1|2;
    fireRate: 0|1|2;
    masteryReq: 0|1|2;
    productCategory: 0|1;
    omegaAttenuation: 0|1|2;
}

export interface meleeGuessCorrectness extends guessCorrectness{
    followThrough: number;
    range: number;
    slamRadius:number;
    heavySlamRadius:number;
    windUp:number;
}

export interface gunGuessCorrectness extends guessCorrectness{
    trigger: string;
}
