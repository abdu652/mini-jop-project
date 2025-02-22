import { Schema, model } from "mongoose";
import validator from "validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
userSchema.pre("save",async function(){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password,salt);
    this.password = hashedPassword;
});
userSchema.methods.createJWT = function(){
    const token = jwt.sign({useId:this._id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRE});
    return token;
}
userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = model('User', userSchema);
export default User;