import User from "../models/user.model.js"
const register = async (req, res,next) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        throw new Error("Provide all values");
    }
        const user = await User.create(req.body);
        res.status(201).json(user);
};

const login = async (req, res) => {
    res.send("login route");
};

const updateUser = async (req, res) => {
    res.send("update user route");
};

export { register, login, updateUser };
