import {useState} from 'react'
import { MarkComplete } from './MarkComplete';
export function Todos({todos}) {
	const [status, setStatus] = useState(false);
	return <div>
		{todos.map(function(todo){
			return <div>
				<h1>{todo.title}</h1>
				<h2>{todo.description}</h2>
				<button onClick = {() => {
						fetch("http://localhost:3000/completed",{
						method:"PUT",
						headers:{
							"content-type": "application/json"}}).then(async function(res){
							const json = await res.json();
							setStatus(true);
							alert("Marked Complete");
						})
						{setStatus(false)}}}>
					<MarkComplete status={status}></MarkComplete>

				</button>
			</div>
		})}
	</div>
}