import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Yashwin',
    age : 20,
    address: {
      city: 'Gurugram',
      state: 'Haryana',
      country : 'India'
    }
  }

  let newArray = ["1","2","3"]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Cards username = 'Yashwin'  /> 
      <Cards post = 'Senior Software Developer' />

    </>
  )
}

export default App 
