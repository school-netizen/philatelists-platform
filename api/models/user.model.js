import { Schema,Model, model } from "mongoose";

//UserSchema: this is basic schema further updation may be need:
const userSchema = new Schema({
    user_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});

const User= model('User',userSchema);

export default User;