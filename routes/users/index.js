const express = require('express');
const router = express.Router();

const control = require('./controller')

router.get('/', control.get)
router.post('/register', control.register)
router.post('/login', control.login);

module.exports = router