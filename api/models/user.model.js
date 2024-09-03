import { Schema,Model } from "mongoose";

//UserSchema: this is basic schema further updation may be need:
const UserSchema = new Schema({
    user_name:{
        type:String,
        required:true,
    },
    
});