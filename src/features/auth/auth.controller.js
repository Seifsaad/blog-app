const authService = require('./auth.service')

const register = async (req, res,next) => {
    try {

    const { email,name, password } = req.body;
    await authService.register(email,name,password);
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
