const register = async (req, res) => {
    res.send("register route");
};

const login = async (req, res) => {
    res.send("login route");
};

const updateUser = async (req, res) => {
    res.send("update user route");
};

export { register, login, updateUser };
