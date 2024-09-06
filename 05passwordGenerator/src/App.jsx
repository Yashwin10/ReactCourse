import { useState, useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(()=>{ 
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }

    if(symbolAllowed){
      str += "!@#$%^&**()_+"
    }

    for(let i=0; i<length ; i++){

      const randInt = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randInt)

    }

    setPassword(pass)

   }, [length, symbolAllowed, numberAllowed])

  useEffect(() => {
    generatePassword()
   }, [length, numberAllowed, symbolAllowed])
  
  const copyPasswordToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
   }

  const passwordRef = useRef(null)
  
  return (
    <>
      <div className= "w-full max-w-lg mx-auto shadow-md rounded-lg px-6 py-6 my-8 bg-gray-800 text-orange-500 ">
        <h1  className= "text-3xl font-bold mb-2 text-center">Password Generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
    
          <input type='text' value={password} className="outline-none w-full py-1 px-3" placeholder='Password' readOnly ref={passwordRef} />
          
          <button className ='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  onClick={copyPasswordToClipBoard}>copy</button>

        </div>

        <div className = "flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={32} value={length} className='cursor-pointer' onChange={(e)   => setLength(e.target.value)}
                   id = "length" name=""
              />
            <label htmlFor="length"> Length: {length}</label>
            <br/>
          
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox" name="" id="numbersAllowed" defaultChecked={numberAllowed} 
            
            onChange={(e) => { setNumberAllowed((prev)=> !prev) }} ></input>
            
            <label htmlFor='numbersAllowed'> Include Numbers</label>
          
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox" name="" id="symbolsAllowed" defaultChecked={symbolAllowed} 
            
            onChange={(e) => { setSymbolAllowed((prev)=> !prev) }} 
            ></input>

            <label htmlFor='symbolsAllowed'> Include Symbols</label>       
{/* htmlFor se label tag input tag se link hojata hai aur iski vajah se jab label mein likhe content pe click krte hain toh checkbox check ya uncheck hojata hai */} 

          </div>
        </div> 
      </div>
    </>
  )
}

export default App
