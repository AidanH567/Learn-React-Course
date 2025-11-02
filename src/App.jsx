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

function App() {
  
function generateAllNewDice() {
  //  const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6) )
}
console.log(generateAllNewDice())
  return (
    <>
    
         <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
       
    
</>
  )
}

export default App
