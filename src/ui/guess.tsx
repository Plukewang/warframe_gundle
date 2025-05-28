import { ReactNode } from "react";
import { GuessCorrectness } from "../types/guessCorrectness";
import { damageIconTable } from "../utils/damageIcons";


interface guessProps{
    guess: GuessCorrectness
    
}

export function GuessResult({guess} : guessProps): ReactNode{

    const [ right,wrong] = [String.fromCodePoint(0x2705), String.fromCodePoint(0x274c)];

    return(
           
            <li >
                <ul className="guessHistory">
                    {/* Image of the guessed weapon*/}
                    <li className="guess ">
                        <img className="guessImg" src={guess.imgSrc} alt = {guess.name}/>     
                    </li>

                    {/* category of the weapon */}

                    <li className="guess">
                        <h3>Type</h3>
                        <p>{guess.category? right: wrong}</p>
                    </li>
                    {/* release date of the weapon */}
                    <li className="guess">
                        <h3>Released</h3>
                        <p >{GuessCorrectness.toSymbol(guess.introduced)}</p>
                    </li>


                    {/* mastery requirement of the weapon */}

                    <li className="guess">
                        <h3>MR</h3>
                        <p >{GuessCorrectness.toSymbol(guess.masteryReq)}</p>
                    </li>


                    {/* Whether the weapon is prime */}
                    <li className="guess">
                        <h3>Prime?</h3>
                        <p>{guess.isPrime? right: wrong}</p>
                    </li>

                    {/* the related factions */}

                    <li className="guess">
                        <h3>Factions</h3>
                        <p  className="guessList"> {guess.tags}</p>
                    </li>

                    {/* which damage types match */}
                    <li className="guess ">
                        <h3>Damage</h3>
                        <ul 
                            className="damageList"
                        >
                            {guess.damage.map((val)=>{
                                return <li>
                                    <img src={damageIconTable.get(val)} height={20}/>
                                </li> 
                            })}
                        </ul>
                            
                    </li>

                </ul>
            </li>

    )
}

//fallback
export function GuessResultSkeleton(): ReactNode{
    return <li>
        <ul className="guessHistory">
           {
            //produce an empty list of icons for a fallback. Maybe go for a loading animation.
            Array(7).map((val,i)=>{
                return <li 
                    className="guess"
                    key={i}>
                </li>
            })
           }
        </ul>
    </li>
}  

