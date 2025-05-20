/**
 * Type definitions for Public Export's data
 */

import { GuessCorrectness } from "./guessCorrectness";

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
/**

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
 */

export interface weaponQuery{
    category: string;
    introduced: string;
    masteryReq: number;
    tags: string[];
    isPrime: boolean;
    damage: any;
}

export interface damageTypes{
    "total": number;
    "impact": number;
    "puncture": number;
    "slash": number;
    "heat": number;
    "cold": number;
    "electricity": number;
    "toxin": number;
    "blast": number;
    "radiation": number;
    "gas": number;
    "magnetic": number;
    "viral": number;
    "corrosive": number;
    "void": number;
    "tau": number;
    "cinematic": number;
    "shieldDrain": number;
    "healthDrain": number;
    "energyDrain": number;
    "true": number;
}



export class Guess{
    [key:string]: any;
    name: string='';
    category: string='';
    introduced: string[]=[];
    masteryReq: number=0;
    tags: string[]=[];
    isPrime: boolean=false;
    damage: any=null;

    //parameterized constructor
    constructor(
        name: string = '',
        category: string = '',
        introduced: string[] = [],
        masteryReq: number = 0,
        tags: string[] = [],
        isPrime: boolean = false,
        damage: any =null,
    ) {
        this.name = name;
        this.category = category;
        this.introduced = introduced;
        this.masteryReq = masteryReq;
        this.tags= tags;
        this.isPrime = isPrime;
        this.damage = damage;
    }

    public compareGuess(other: Guess): GuessCorrectness{
        
        let nameCorrect = this.name===other.name? true:false;
        let category = this.category===other.category? true: false;
        let introduced = this.compareReleaseDate(other);
        let masteryReq = this.compareMastery(other);
        let tags: string[] = this.compareTags(other);
        let isPrime = this.isPrime? true: false;
        let damage = this.compareDamage(other);

        return new GuessCorrectness(
            other.name,
            nameCorrect,
            category,
            introduced,
            masteryReq,
            tags,
            isPrime,
            damage,
        )
    }

    private compareReleaseDate(other: Guess): number{
        //yyyy-mm-dd format so we just split it into separate numbers
        
        for(let i = 0;i<3;i++){
            
            let [thisDate, otherDate] = [Number(other.introduced[i]), Number(this.introduced[i])];

            
            if(thisDate===otherDate) continue;
            if(thisDate>otherDate) return 0;
            else return 2;
        }

        return 1;
    }

    private compareMastery(other: Guess): number{
        //high-2low-1equal-0
        if(this.masteryReq===other.masteryReq) return 1;
        if(this.masteryReq>other.masteryReq) return 0;
        else return 2;
    }

    //filter for equal tags
    private compareTags(other: Guess): string[]{
        return this.tags.filter((e)=>other.tags.includes(e));
    }
    
    //return list of matching damage types
    private compareDamage(other: Guess): string[]{
        let res = [];

        for(const [key,value] of Object.entries(other.damage)){
            if(key==='total') continue;
            if(this.damage[key] !=0 && value!=0) res.push(key);
        }

        //console.log(res)
        return res;
    }

}


