import { Suspense, useEffect, useState } from 'react'


import './App.css'
import Search from './ui/Search';
import { useGameStore } from './gamelogic';
import { GuessCorrectness } from './types/guessCorrectness';
import { GuessResult, GuessResultSkeleton } from './ui/guess';
import GameEndModal from './ui/GameEndModal';
import AboutGameModal from './ui/AboutGameModal';

function App() {

  //history state of current guesses.
  const guessHistory = useGameStore((state)=>state.guessHistory);
  const setHistory = useGameStore((state)=>state.setGuesses);
  const correctGuess = useGameStore((state)=>state.correctWeapon);
  

  const [gameEnd, setGameEnd] = useState<boolean>(false);

  
   /**
   * Sync state with session storage to persist game data
   */
   useEffect(()=>{
      setHistory(JSON.parse(sessionStorage.getItem('game')|| JSON.stringify([])));
  },[])

  /**
   * Sync state with correct answer
   */

  useEffect(()=>{
    //reset the game if correct
      if(guessHistory[guessHistory.length-1]?.name===correctGuess.name || guessHistory.length>5){
        setGameEnd(true);
      }

  },[guessHistory])

  return (
    <>

      <h1 className='hook_title'>Guess a weapon from Warframe!</h1>

      <AboutGameModal/>

      <ul className='guessHistoryList'>
          {
            guessHistory.map((guess: GuessCorrectness, i)=>{
              return(
                <Suspense
                  fallback={<GuessResultSkeleton/>}
                >
                  <GuessResult
                    key={i}
                    guess={guess}
                  />
              </Suspense>
              )
            })
          }
      </ul>
      
      <Search/>
      <GameEndModal 
        control={gameEnd} 
        winLose={guessHistory[guessHistory.length-1]?.name===correctGuess.name? true:false}
        closeGame={()=>setGameEnd(false)}
      />

      
      


    </>
  )
}

export default App
