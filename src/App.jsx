import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyAwesomeh1 from './Components/firstComponent'
import './App.css'

function Page() {
return (
<ol>
<li>Hi</li>
<li>There</li>
<li>Dad</li>
<li>Pasta</li>
<li>Good</li>
</ol>
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
