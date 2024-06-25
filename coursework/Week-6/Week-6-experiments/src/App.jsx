import {useCallback, memo, useState} from 'react'

function App(){
	const [state, setState] = useState(0);

	//normal function
	function inputFunction(){
		console.log("Hi there");
	}

	//usecallback function . this hook is used to memoize the functions
	//across the child components
	const func = useCallback(()=>{
		console.log("hi this is usecallback function");
	},[])

	return (<>
		<Child func1={func} /> 
		<button onClick={()=>{
			setState(state+1);
		}}> Click me </button>
		</>
		)
}

const Child = memo(({func1})=>{
	console.log("child render");

	return <div>
		<button>Button Clicked</button>
	</div>

})

export default App;