// //keys in react

// let counter = 4;

// function App(){
//   const [todos, setTodos] = useState([{
//     id:3,
//     title: "Polamarasetty",
//     description: "third todo"
//   }, {
//     id: 1,
//     title: "dilip",
//     description: "first todo"
//   }, {
//     id:2,
//     title: "teja",
//     description: "second todo"
//   }]);


//   function addTodo(){
//     setTodos([...todos, {
//       id:counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return (
//     <div>
//     <button onClick={addTodo}> Add a todo</button>
//     {todos.map( todo => <Todo key={todo.id} title = {todo.title} description={todo.description} />)}
//   </div>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h5>
//       {title}
//     </h5>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App