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

  const languagesElements = languages.map((lan) => {
    const styles = {backgroundColor : lan.backgroundColor,
              color: lan.color}
    return (
      <span style={styles}
      className='lan-chip'
      >{lan.name}</span>

    )
  })

  return (
    <main>
      <Header4/>
       <section className="win-box">
            <h1>You Win</h1>
             <p>Well done! 🎉</p>
            </section>
            <section className='lan-box'>
              {languagesElements}
              </section>
    </main>
  )
}
export default App
