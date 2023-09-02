const express = require('express');

const AuthController = require('../../controllers/auth-controller')
const router = express.Router();

router.get('/', AuthController.get);
router.get('/authenticate', AuthController.authenticate);

module.exports = router;