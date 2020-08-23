const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User;