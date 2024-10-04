const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const logRequest = require('../middleware/requestLogger');
const validate = require('../middleware/requestValidator');
const schema = require('../validators/authSchema');

router.post('/register',logRequest, validate(schema.registrationSchema) ,userController.register);
router.post('/login', logRequest, validate(schema.loginSchema) ,userController.login);
router.get('/profile', logRequest, authenticateToken, userController.getProfile);

module.exports = router
