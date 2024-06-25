const express = require("express");
const cors = require("cors");

const {createTodo} = require("./types");
const {updateTodo} = require("./types");
const {todo} = require("./db");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/todos", async(req, res)=>{
	const todos = await todo.find({});
	res.json({
		todos
	})
})

app.post("/todo", async (req, res)=>{
	const createPayload = req.body;
	console.log("The pointer is here")
	console.log(createPayload);
	const parsedPayload  = createTodo.safeParse(createPayload);
	if(!parsedPayload.success){
		res.status(411).json({
			msg: "You sent the wrong inputs",
		})
		return;
	}

	//store todo in db
	await todo.create({
		title:createPayload.title,
		description:createPayload.description,
		completed:false
	})

	res.json({
		msg: "Todo created"
	})

})

app.put("/completed", async (req, res)=>{
	const updatePayload = req.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);
	if(!parsedPayload.success){
		res.status(411).json({
			msg: "You sent the wrong inputs",
		})
	}

	//set the specific todo to completed
	await todo.updateOne({
		_id:req.body.id
	},{
		$set: {completed: true}
	})

	res.json({
		msg:"Todo marked as completed"
	})
})

const port = 3000;
app.listen(port, ()=>{
	console.log("App is listening on PORT 3000");
})