import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
//         |         |                   |
//         V         V                   V
//    Variable    Method               Default Value of the Variable 

//                This Method is responsible for changing this variable   

  // function changeColor(color){         This is not required at all 
  //   setColor(color)
  // }

  return (
    <>
      <div className = 'w-full h-screen duration-200 bg-slate-600  ' style={{backgroundColor : color}}>
        <div className = 'fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  '>
          <div className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl  '>

            <button style = {{backgroundColor:'blue'}} className= ' outline-none px-4 py-1 rounded-full text-black shadow-lg ' onClick={()=>setColor('darkblue')}>
              Blue</button>
            
            <button style = {{backgroundColor:'green'}} className= ' outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>setColor('lightgreen')}>Green</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
