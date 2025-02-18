import { Schema, model } from "mongoose";
import validator from "validator"
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate:{
           validator:validator.isEmail,
           message:"Please enter a valid email"
        },
        unique: [true, 'Email is already registered']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    location:{
        type:String,
        trim:true,
        default:"my city"
    }
});

const User = model('User', userSchema);
export default User;