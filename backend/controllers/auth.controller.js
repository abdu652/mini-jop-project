import User from "../models/user.model.js"
import CustomError from "../error/error.js";
const register = async (req, res,next) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        throw new CustomError("Provide all values",400);
    }
    const userExists = await User.findOne({email});
    if(userExists){
        throw new CustomError("Email already in use.",400);
    }
        const user = await User.create(req.body);
        const token = await user.createJWT();
        res.status(201).json({...user._doc,token});

};

const login = async (req, res) => {
    res.send("login route");
};

const updateUser = async (req, res) => {
    res.send("update user route");
};

export { register, login, updateUser };
