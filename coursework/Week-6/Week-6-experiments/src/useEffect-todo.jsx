import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// having the state in the component which changes the state
function App(){
  const [number, setNumber] = useState(1);
  return (
    <div>
      <button onClick= {() => {setNumber(1)}}>1</button>
      <button onClick= {() => {setNumber(2)}}>2</button>
      <button onClick= {() => {setNumber(3)}}>3</button>
      <button onClick= {() => {setNumber(4)}}>4</button>

      <Todo id={number} />
    </div>
    )
}

function Todo({id}){
  const [todo, setTodo] = useState({});
  const URL = "https://sum-server.100xdevs.com/todo?id="+ id;
  console.log(URL);
  useEffect(() => {fetch(URL)
      .then(async (res)=>{
        const response = await res.json();
        setTodo(response.todo);

      })}, [id])

  return(
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
    </div>
    )
}

export default App