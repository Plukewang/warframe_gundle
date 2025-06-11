import { JSX } from "react";
import { useGameStore } from "../gamelogic";
import { CorrectAnswer } from "./GuessResults";


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
                <div>
                    {winLose ? 
                        
                            <h1>You win!</h1>
                            
                    :
                            <h1>Better Luck Next Time!</h1>
                        
                    }
                        <h2>The correct answer was {correctWeapon.name}</h2>
                </div>
                <CorrectAnswer
                    ans={correctWeapon}            
                />

                <button onClick={onClick}>
                    <h3>Start Another Game</h3>
                </button>
            </div>
        </div>
    )
    }else return <></>
    
}
