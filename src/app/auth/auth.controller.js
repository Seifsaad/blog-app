const authService = require('./auth.service')

const register = async (req, res,next) => {
    try {

    const {email,name,password } = req.body;
    const createdUser = await authService.register(email,name,password);
    res.status(201).json({message:"User registered successfully",sucess:true,data:createdUser});
    }catch (error) {
        next(error)
    }
};
const login = async (req, res,next) => {

};


module.exports = {
    register,
    login

}
