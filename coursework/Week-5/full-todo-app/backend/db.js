const mongo  = require("mongoose");

mongo.connect("mongodb+srv://tejadilip23898:qqDHnEarn1JKsG1q@cluster0.6ltyozn.mongodb.net/todo");

const todoSchema = mongo.Schema({
	title:String,
	description:String,
	completed: Boolean
})

const todo = mongo.model("todos", todoSchema);

module.exports = {
	todo
}