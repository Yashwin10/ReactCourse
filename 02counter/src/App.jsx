import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;

  const [counter,setCounter] = useState(0)      // Here counter is a variable and setCounter is a method ... names can be anything be it SuperMan 


  const addValue = function(){
     setCounter(counter+1)
     console.log(counter)
  }
  const remValue = function(){
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React Course by Hitesh Choudhary</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick= {addValue}>Add Value</button>
      <button
      onClick = {remValue}>Remove Value </button>
      <p>Footer : </p>
    </>
  )
}

export default App
