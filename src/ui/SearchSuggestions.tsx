import { MouseEventHandler, ReactNode } from "react";
import { weaponData } from "../types/weaponData";
import { useGameStore } from "../gamelogic";
import { fetchGuess } from "../utils/getWeapons";
interface searchSuggestionProps{
    searchResults: weaponData[];
}
export default function SearchSuggestions({searchResults}: searchSuggestionProps): ReactNode{

    const addGuestHistory = useGameStore((state)=>state.newGuess);
    const correctGuess = useGameStore((state)=>state.correctWeapon);
    const guessHistory = useGameStore((state)=>state.guessHistory);


    return(
        <ul>
            {
            
                searchResults.slice(0,10).map((searchResult: weaponData, i)=>{
                    return (
                    <li
                        key={i}
                        onClick={
                            async ()=>{
                                try{
                                    const res = await fetchGuess(searchResult.name);
                                    addGuestHistory(correctGuess.compareGuess(res));
                                    console.log(correctGuess)
                                    sessionStorage.setItem('game', JSON.stringify(guessHistory));
                                }catch(e){
                                    console.error(e);
                                }
                                
                            }
                        }
                    >
                        {searchResult.name}
                    </li>)
                }) 
               
            }
        </ul>
    )
}
