const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/user/get');

router.get('/user/:userId', getUserController.getUserData);

module.exports = router;