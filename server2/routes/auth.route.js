const express = require('express');
const { generateToken, logoutUser } = require('../controllers/auth.controller');
const router = express.Router()

router.post('/logout', logoutUser)
router.post('/jwt', generateToken)

module.exports = router;