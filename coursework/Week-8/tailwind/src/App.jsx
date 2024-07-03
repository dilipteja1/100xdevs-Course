import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {VideoCard} from './components/VideoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoCard /> 
    </>
  )
}

export default App
