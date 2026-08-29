const authService = require('./auth.service')

const register = async (req, res,next) => {
    try {

    const {email,name,password } = req.body;
    const token = await authService.register(email,name,password);
    res.status(201).json({message:"User registered successfully",sucess:true,data:token});
    }catch (error) {
        next(error)
    }
};
const login = async (req, res,next) => {
    try {

    const {email,password} = req.body;
    const userId = await authService.login(email,password);
    res.status(201).json({message:"Login successfully",sucess:true,data:userId});
    }catch (error) {
        next(error)
    }
};


module.exports = {
    register,
    login

}
