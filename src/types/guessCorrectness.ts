export class GuessCorrectness{
    [key:string]: any;

    name: string='';
    nameCorrect: boolean = false;
    category: boolean=false;//
    introduced: number = 0;
    masteryReq: number = 0;
    tags: string[]=[];
    isPrime: boolean=false;
    damage: string[]=[];

    constructor(
    name: string='',
    nameCorrect: boolean = false,
    category: boolean=false,//
    introduced: number = 0,
    masteryReq: number = 0,
    tags: string[]=[],
    isPrime: boolean=false,
    damage: string[]=[],
    ) {
        this.name = name;
        this.nameCorrect = nameCorrect;
        this.category = category;
        this.introduced = introduced;
        this.masteryReq = masteryReq;
        this.tags= tags;
        this.isPrime = isPrime
        this.damage = damage;
    }

    
    /**
     * Static method for generating the right emoji for high low guesses
     * @param val 
     * @returns 
     */
    static  toSymbol(val: number): string{
        if(val===0){
            return String.fromCodePoint(0x1F879);
        }else if(val===1){
            return String.fromCodePoint(0x2705);
        }else{
            return String.fromCodePoint(0x1F87B);
        }   
    }


}
