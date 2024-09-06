import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [render, setRender] = useState(false);

  useEffect( ()=>{
    setInterval(()=>{
      
      setRender(true)
    }, 10000)
    return ()=>{
      console.log("the component getting unmounted")
    }
  },[]  )
  return (
    <>
      {render? <MyComponent /> : <div>No component</div> } 
    </>
  )
}

function MyComponent(){
  return <>
    This is my component
  </>
}

export default App
