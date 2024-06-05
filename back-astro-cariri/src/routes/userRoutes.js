const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/user/get');
const putUserController = require('../controllers/user/put');
router.use(express.json());

router.get('/user/:userId', getUserController.getUserData);
router.put('/user/:userId', putUserController.putUserData);

module.exports = router;