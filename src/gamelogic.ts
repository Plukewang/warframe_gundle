import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { GuessCorrectness } from './types/guessCorrectness';
import { fetchRandomWeapon } from './utils/getWeapons';



/**
 * Create global store of game state. 
 * 
 */
export const useGameStore = create(
    combine(
        {   
            //set initial values: correctWeapon, guessHistory
            correctWeapon: await fetchRandomWeapon(),
            guessHistory: Array<GuessCorrectness>(),
        },
        (set) => ({
                newGuess: (guess: GuessCorrectness) =>{
                    //guess adds immutably to the guessHistory state array
                    set((state) =>({
                        guessHistory:
                            [...state.guessHistory, guess]
                    }))
                },
                resetGame: async ()=>{
                    //first reset guess history for faster renders
                    set(()=>({
                        guessHistory: [],
                    }))

                    try{
                        const res = await fetchRandomWeapon();
                        set(()=>({
                            correctWeapon: res,
                        }))
                    }catch(e){
                        console.error(e)
                    }
                    
                },
                setGuesses: (guesses: GuessCorrectness[]) =>{
                    if(guesses?.length < 5){
                        set(() =>({
                            guessHistory:
                                [...guesses]
                        }))
                    }
                    
                },
                
            }
        )
    )
);



