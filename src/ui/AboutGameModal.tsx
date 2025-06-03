import { useState } from "react";


export default function AboutGameModal(){
    const [open, setOpen] = useState(false);
    const openModal = ()=>setOpen(true);
    const closeModal = ()=>setOpen(false);
    return (
        <>  
            <button onClick={openModal}>
                How to play
            </button>
            <div className={open? "darkBG" : "modalHidden"}>
                <div className="modal">
                    <h1>How to play</h1>

                    <div>
                        <p>Enter a Warframe weapon's name into the search bar or click Random to start the game.</p>
                        <p>After each guess, you will receive information about the guess's accuracy.</p>

                        <p>{String.fromCodePoint(0x2705)} { String.fromCodePoint(0x274c)} indicates your guess is correct or incorrect</p>
                        <p>{String.fromCodePoint(0x1F879)} {String.fromCodePoint(0x1F87B)} indicates the correct weapon has a lower or higher stat in that guess</p>
                        <p>For the weapon's associated factions and damage types, matching tags will appear in the box. </p>
                    </div>

                    

                    <button onClick={closeModal}>
                        <h3>Close</h3>
                    </button>
                </div>
            </div>
            
        </>
        

        
        
    )
}
