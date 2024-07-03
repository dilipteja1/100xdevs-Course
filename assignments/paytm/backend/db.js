const mangoose = require("mongoose");
const { User } = require("../../week-3/03-mongo/db");

// connect to MongoDB
mongoose.connect("mongodb+srv://tejadilip23898:qqDHnEarn1JKsG1q@cluster0.6ltyozn.mongodb.net/")

const UserSchema = new mangoose.Schema({
    user:{
        type:String,
        required: true,
        maxLength: 30,
        minLength: 3,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true, 
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = {
  User  
}