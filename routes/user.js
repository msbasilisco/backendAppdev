const express = require('express');
const rateLimitMiddleware = require('../middleware/rateLimitMiddleware');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const logRequest = require('../middleware/requestLog');
const validate = require('../middleware/reqValidator');
const authSchema = require('../validator/authSchema');
const router = express.Router();

router.post('/register',logRequest, validate(authSchema.registrationSchema),rateLimitMiddleware,userController.register);
router.post('/login', logRequest, validate(authSchema.loginSchema) ,rateLimitMiddleware,userController.login);
router.get('/profile', logRequest, authenticateToken, userController.getProfile);

module.exports = router
