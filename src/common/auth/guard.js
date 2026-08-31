const jwt = require("jsonwebtoken");
const userRepository = require("../../app/user/user.repository");

async function authGuard(req, res, next) {
    try {
        const authorization = req.headers.authorization;
        const token = authorization.split(' ')[1];
        if (!token) throw new Error("Token not exist");
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const userId = payload.id;
        const userExist = await userRepository.checkUserExistsById(userId);
        if (!userExist) throw new Error("User does not exist");
        req.user = payload;
        next()
    } catch (error) {
        next(error);
    }
}

module.exports = authGuard;