import { MouseEventHandler, ReactNode } from "react";
import { weaponData } from "../types/weaponData";
import { useGameStore } from "../gamelogic";
import { fetchGuess } from "../utils/getWeapons";
interface searchSuggestionProps{
    searchResults: weaponData[];
    loading: (load: boolean)=>void
}
export default function SearchSuggestions({searchResults, loading}: searchSuggestionProps): ReactNode{

    const addGuestHistory = useGameStore((state)=>state.newGuess);
    const correctGuess = useGameStore((state)=>state.correctWeapon);
    const guessHistory = useGameStore((state)=>state.guessHistory);

    
    return searchResults.length?(

        
        <ul className="searchSuggestions">
            {
            
                searchResults.slice(0,10).map((searchResult: weaponData, i)=>{
                    return (
                    <li
                        className='searchSuggestionItem'
                        key={i}
                        onClick={
                            async ()=>{
                                try{
                                    loading(true);
                                    const res = await fetchGuess(searchResult.name);
                                    loading(false);
                                    addGuestHistory(correctGuess.compareGuess(res));
                                    sessionStorage.setItem('game', JSON.stringify(guessHistory));
                                }catch(e){
                                    console.error(e);
                                    loading(false);
                                }
                                
                            }
                        }
                    >
                        {searchResult.name}
                    </li>)
                }) 
               
            }
        </ul>
    ): (
        <></>
    )
}
