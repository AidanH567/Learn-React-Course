import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyAwesomeh1 from './Components/firstComponent'
import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'





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
    <Navbar/>
    <MainContent/>
    </>
  )
}

export default App
