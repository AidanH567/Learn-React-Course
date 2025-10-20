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




function Page() {
return (
 <>
        <Header/>
        
        <Footer/>
        </>
)
}

function App() {
  

  return (
    <>
    <Header2/>
    <Entry
    img={{
        src: "https://scrimba.com/links/travel-journal-japan-image-url",
        alt: "Mount Fuji"
    }}
    country = "Japan"
    place = "Mount Fuji"
    date = "12 Jan, 2021 - 24 Jan, 2021"
    info = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    />
    
    
{/*<Contact
                img="./assets/Globe.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
            <Joke setup="why did the chicken cross the road" punchline="to fuck your mum"/>
        <Joke setup="why did the chicken cross the road" punchline="to get to the otehr side"/>
        <Joke setup="why did the chicken cross the road" punchline="idk you ask him"/>
        <Joke setup="why did the chicken cross the road" punchline="to kill himself"/>
    
*/}
</>
  )
}

export default App
