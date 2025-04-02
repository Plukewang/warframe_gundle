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
    comboduration: number;
    followThrough: number;
    range: number;
    slamAttack: number;
    slamRadialDamage: number;
    slamRadius:number;
    slideAttack:number;
    heavyAttackDamage: number;
    heavySlamAttack: number;
    heavySlamRadialDamage: number;
    heavySlamRadius:9;
    windUp:1;
}
