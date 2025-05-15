import { ReactNode } from "react";
import { GuessCorrectness } from "../types/guessCorrectness";


interface guessProps{
    guessImageURL: string;
    guess: GuessCorrectness
    
}

export function GuessResult({guessImageURL='',guess} : guessProps): ReactNode{

    const [high, right, low, wrong] = ['&#129153;',String.fromCodePoint(0x2705), `&#129147;` ,String.fromCodePoint(0x274c)];
    
    return(
           
            <li >
                <ul className="guessHistory">
                    {/* Image of the guessed weapon*/}
                    <li>
                        <img src={guessImageURL} alt = {guess.name}/>     
                    </li>

                    {/* category of the weapon */}

                    <li>
                        <p>{guess.category? right: wrong}</p>
                    </li>
                    {/* release date of the weapon */}
                    <li>
                        <p>{GuessCorrectness.toSymbol(guess.introduced)}</p>
                    </li>


                    {/* mastery requirement of the weapon */}

                    <li>
                        <p>{GuessCorrectness.toSymbol(guess.masteryReq)}</p>
                    </li>


                    {/* Whether the weapon is prime */}
                    <li>
                        <p>{guess.isPrime? right: wrong}</p>
                    </li>

                    {/* the related factions */}

                    <li>
                        <p>{guess.tags}</p>
                    </li>

                    {/* which damage types match */}


                </ul>
            </li>

    )
}
