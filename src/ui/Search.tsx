import { ChangeEvent, useState } from "react"
import SearchSuggestions from "./SearchSuggestions"
import weaponsData from "../data.json"
import Fuse from 'fuse.js'
import { weaponData } from "../types/weaponData";


export default function Search(){
    //set displayed search param
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState<weaponData[]>([]);
    //generate the list to search
    const weaponsList: weaponData[] = Object.entries(weaponsData.ExportWeapons).map(entry=>entry[1]);

    const fuseOptions:any = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "name",
        ]

        
    };
    //initialize fuzzy search engine.
    const fuse = new Fuse(weaponsList, fuseOptions);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement >) =>{
        setSearch(e.target.value)
        setSuggestions(fuse.search(e.target.value).map(x=>{
            return x.item;
        }));
        
    }

    return(
        <div className="search_bar">
            <input 
                type="text" 
                value={search} 
                placeholder="Enter a weapon..." 
                onChange={handleChange}
            />
            <SearchSuggestions searchResults={suggestions}/>
        </div>

                
                
    )
}
