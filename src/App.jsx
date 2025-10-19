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
    
<Contact
                img="./images/mr-whiskerson.png"
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
    </>
  )
}

export default App
