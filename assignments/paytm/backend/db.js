const mongoose = require("mongoose");

const username = encodeURIComponent("tejadilip23898")
const password = encodeURIComponent("gckaHQJAvRXaNGz2")

// connect to MongoDB
mongoose.connect("mongodb+srv://tejadilip23898:gckaHQJAvRXaNGz2@cluster0.6ltyozn.mongodb.net/")
// mongodb+srv://tejadilip23898:SatyaRao%4091@cluster0.6ltyozn.mongodb.net/

const UserSchema = new mongoose.Schema({
    username:{
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

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', accountSchema)


module.exports = {
	User,
    Account
};