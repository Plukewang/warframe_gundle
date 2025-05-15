import { JSX, ReactNode, useState } from "react";
import { useGameStore } from "../gamelogic";

interface GameEndModalProps{
    control: boolean;
    winLose: boolean;
    closeGame: ()=>void;
}

export default function GameEndModal({control, winLose, closeGame}:GameEndModalProps): JSX.Element{
    const resetGame = useGameStore((state)=>state.resetGame)
    const correctWeapon=useGameStore((state)=>state.correctWeapon);

    //close the modal and restart
    const onClick = ()=>{
        resetGame();
        closeGame();
    }

    if(control){ return(
        <div className="darkBG">

        
        <div className="modal">
        {winLose ? 
            <div>
                <h2>You win!</h2>
                
            </div>
        :
            <div>
                <h2>Better Luck Next Time!</h2>
            </div>
        }
            <h2>The correct answer was {correctWeapon.name}</h2>
            <button onClick={onClick}>
                <p>Start Another Game</p>
            </button>
        </div>
        </div>
    )
    }else return <></>
    
}
