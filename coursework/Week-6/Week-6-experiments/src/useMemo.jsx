import { useState } from 'react'
import { useEffect } from 'react'
import {useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//useMemo

//scenario
// we have a input box whose value is used to make some computation 
// we also have a counter button which increases the count on every click
function App(){
	const [input, setInput] = useState(0);
	const [counter, setCounter] = useState(0);

	let count = useMemo(() =>{
		let finalValue=0;
		for(let i=0;i<input;i++){
		finalValue = finalValue+ i;
	}
		return finalValue;
	}, [input])

	return (<>
	<input type="text" placeholder="Enter the number" onChange={(e)=>{setInput(e.target.value)}}></input>
	<div>Sum from 1 to {input} is {count}</div>
	<button onClick={() => {setCounter(counter+1)}} > counter is {counter}</button>
	</>)
}

export default App






