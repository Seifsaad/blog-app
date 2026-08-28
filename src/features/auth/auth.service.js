const authRepository = require('./auth.repository');
const register = async (email,name,password) => {
    const userExist = await authRepository.findUserByEmail(email);
    if (userExist) throw new Error("User already exists");


}
const login = (email,password) => {

}


module.exports = {
    register,
    login
}