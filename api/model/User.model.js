import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    username:{
        required: true,
        type:String,
        minLength:3,
        maxLength:50,
        unique:true
    },
    email:{
        required: true,
        type:String,
        minLength:3,
        maxLength:50
    },
    password:{
        required: true,
        type:String,
        minLength:3,
        maxLength:100
    }
}, {timestaps: true})

export const User = mongoose.model('User', UserSchema)