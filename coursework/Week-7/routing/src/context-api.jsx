import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from './context'

function App() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value= {{count, setCount}}>
        <Count />
    </CountContext.Provider>
    </div>
  )
}

function Count(){
    return (
        <>
        <CountRenderer />
        <Buttons />
        </>        
    )
}

function CountRenderer() {
    const {count, setCount} = useContext(CountContext)    
    return <>
        {count}
        </>
}

function Buttons(){
    const {count, setCount} = useContext(CountContext)
    return <div>
        <button onClick={() => {
            setCount(count+1)
        }}>
            Increase
        </button>
        <button onClick={() => {
            setCount(count-1) 
        }}>
            Decrease
        </button>
    </div>
}

export default App
