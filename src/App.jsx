import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyAwesomeh1 from './Components/firstComponent'
import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Info from './Components/Info'
import DigitalCardBox from './Components/digitalCardBox'
import Interests from './Components/Interests'
import About from './Components/About'
import Header2 from './Components/Header2'
import Entry from './Components/Entry'
import Contact from './Components/Contact'
import Joke from './Components/Joke'
import MountFuji from './assets/Mount-Fuji.png'
import data from './data'
import Header3 from './Components/Header3'
import Main from './Components/Main'
import Form from './Components/Form'
import React from 'react'
import Die from './Components/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import Header4 from './Components/Header4'
import { languages } from './languages'
import clsx from 'clsx';
import { getFarewellText,randomWord } from "./utils"

const dataArray = data.map(item => {
  return (
    <Entry
      key={item.id}
     {...item} 
    />
  )
})

function Page() {
return (
 <>
        <Header/>
        
        <Footer/>
        </>
)
}
// 'const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(0)
    
//     console.log("Rendered!")
    
//     React.useEffect(() => {
//         fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then( data => setStarWarsData(data) )
//     },[])
//     {/* <Header3/>
//     <Main/>
//     <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//             {starWarsData.name && <pre>{JSON.stringify(starWarsData, null, 2)}</pre>}
//         </div> */}'

// function App() {
  
// function generateAllNewDice() {
//         return new Array(10)
//             .fill(0)
//             .map(() => ({value:Math.ceil(Math.random() * 6),
//               isHeld: false,
//               id: nanoid()
//             }))
//     }
    
//   const [numArray, setNumArray] = React.useState(() => generateAllNewDice())

//   let gameWon = false

//   if (
//     numArray.every(die => die.isHeld) &&
//     numArray.every(die => die.value === numArray[0].value)
    
//   ){
//       gameWon = true
//     }

//    function hold(id) {
//   setNumArray(oldDice =>
//     oldDice.map(die =>
//       die.id === id
//         ? { ...die, isHeld: true } // toggle true/false
//         : die
//     )
//   )
// }

//   const diceElements = numArray.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} hold={()=> hold(die.id)} />)
  
//   function rollDice() {
//     if (gameWon === false) {setNumArray(oldDice => oldDice.map(die =>
//       die.isHeld 
//       ? die
//       : {...die, value: Math.ceil(Math.random() * 6)}
//     ))}
//     else {
//       setNumArray(generateAllNewDice())
//     }
    
//   }
//   return (
//     <>
    
//          <main>
//           <h1 className="title">Tenzies</h1>
//             <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
//             <div className="dice-container">
//                 {diceElements}
//             </div>
//             {gameWon ? <button className="roll-button" onClick={rollDice}>New Game </button> : <button className="roll-button" onClick={rollDice}>Roll</button>}
//             {gameWon && <Confetti/>}
//         </main>
       
    
// </>
//   )
// }
function App() {

  const [currentWord, setCurrentWord] = useState(randomWord())
  const [guessedLetter, setGuessedLetter] = useState([])

  
  
  const wrongGuessCount = guessedLetter.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)
  const isGameWon = currentWord.split("").every(letter => guessedLetter.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetter[guessedLetter.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const wordElements = currentWord.split("").map((word) => {  
    const isGussed = guessedLetter.includes(word)
 return (
  <span className="letter">{isGussed ? word.toUpperCase() : "_"}</span> 
 )
    
  }

  )

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keyboard = alphabet.split("").map((letter, index) =>{
    const isGussed = guessedLetter.includes(letter)
    const isCorrect = isGussed && currentWord.includes(letter)
    const isWrong = isGussed && !currentWord.includes(letter)
     const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

    return (
   <button key={index}
   onClick={()=>addLetter(letter)}
   className={className}
   disabled={isGameOver}
   >{letter.toLocaleUpperCase()}</button>
  )}
  )

  function addLetter(letter){
    setGuessedLetter(prevLetter => prevLetter.includes(letter) ? prevLetter : [...prevLetter,letter])
  }

  const languagesElements = languages.map((lan, index) => {
    const isLost = wrongGuessCount <= index ? false : true;
    const className = isLost ? "chip lost" : "chip"
    const styles = {backgroundColor : lan.backgroundColor,
              color: lan.color}
    return (
      <span style={styles}
      className={className}
      >{lan.name}</span>

    )
  })

  const gameStatusClass = clsx("win-box", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect
  })

   function renderGameStatus(){
    if (!isGameOver && isLastGuessIncorrect) {
      return (
       <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
    ) }

    if (isGameWon) {
      return (
       <><h1>You Win</h1>
             <p>Well done! 🎉</p></>
    ) }
    if (isGameLost) {
      return (
       <><h1>You Lose!</h1>
             <p>You lose! Better start learning Assembly 😭 🎉</p></>
    ) }
    return null
   }
  return (
    <main>
      <Header4/>
       <section className={gameStatusClass}>
            {renderGameStatus()}
            </section>
            <section className='lan-box'>
              {languagesElements}
              </section>
                <section className="words">
                {wordElements}
            </section>
            <section className="keyboard">
                {keyboard}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
    </main>
  )
}
export default App
