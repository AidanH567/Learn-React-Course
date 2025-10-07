import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyAwesomeh1 from './Components/firstComponent'
import './App.css'

function Header() {
  return(
<header>
        <img src="react-logo.png" width="40px" alt="React Logo"/>
        </header>

  )
}

function Page() {
return (
 <>
        <Header/>
        <main>
        <h1>Reasons Im excited to learn React </h1>
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
        </main>
        <footer>© 20xx Herstik development. All rights reserved.</footer>
        </>
)
}

function App() {
  

  return (
    <>
     <h1>Hello React!</h1>
     <img src="react-logo.png" width="40px"/>
     <h1>Fun Facts About React</h1>
    <ul>
    <li>React is very cool</li>
    <li>React is made by meta</li>
    <li>React was made in 2013</li>
    <li>I like using React</li>
    <li>React is very popular</li>
    </ul>
    <MyAwesomeh1/>
    <Page/>
    </>
  )
}

export default App
