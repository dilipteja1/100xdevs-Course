import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const  initial_todo =[{
  title: "gym",
  description: "go to gym from 7 to 9PM",
  completed: false
}, {
  title: "DSA",
  description: "learn DSA from 9 to 10PM",
  completed: true
}]

function App() {


  const [todos, setTodos] = useState(initial_todo);

function onClickHandler(){
  setTodos([...todos, {
    title:"sleep",
    description:"need to get 8hr of sleep",
    completed:false
  }])
}
  return (
    <div>
    <button onClick = {onClickHandler}>click here to add more todos</button>
    {todos.map(function(todo){
      return <Todo title = {todo.title} description={todo.description}></Todo>
    })}
    </div>
  )
}

function Todo(props){
  return <div>
    {props.title}<br></br>
    {props.description}
  </div>
}

export default App
