const { Router } = require('express');
const authController = require('./auth.controller');
const authRoutes = Router();

authRoutes.post('/register', authController.register)
// authRoutes.post('/login', authController.login)
// authRoutes.post('/logout', authController)
// authRoutes.post('/send-otp', authController)


module.exports = authRoutes;