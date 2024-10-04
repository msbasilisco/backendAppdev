const express = require('express');
const rateLimitMiddleware = require('../middleware/rateLimitMiddleware');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const logRequest = require('../middleware/requestLogger');
const validate = require('../middleware/requestValidator');
const schema = require('../validators/authSchema');
const router = express.Router();

router.post('/register',logRequest, validate(schema.registrationSchema),rateLimitMiddleware,userController.register);
router.post('/login', logRequest, validate(schema.loginSchema) ,rateLimitMiddleware,userController.login);
router.get('/profile', logRequest, authenticateToken, userController.getProfile);

module.exports = router
