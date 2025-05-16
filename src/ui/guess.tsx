import { ReactNode } from "react";
import { GuessCorrectness } from "../types/guessCorrectness";


interface guessProps{
    guessImageURL: string;
    guess: GuessCorrectness
    
}

export function GuessResult({guessImageURL='',guess} : guessProps): ReactNode{

    const [ right,wrong] = [String.fromCodePoint(0x2705), String.fromCodePoint(0x274c)];

    console.log(guess.masteryReq)
    return(
           
            <li >
                <ul className="guessHistory">
                    {/* Image of the guessed weapon*/}
                    <li className="guess">
                        <img src={guessImageURL} alt = {guess.name}/>     
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
                        <p>{guess.tags}</p>
                    </li>

                    {/* which damage types match */}
                    <li className="guess">
                        <h3>Damage</h3>
                        <p>{}</p>
                    </li>

                </ul>
            </li>

    )
}
