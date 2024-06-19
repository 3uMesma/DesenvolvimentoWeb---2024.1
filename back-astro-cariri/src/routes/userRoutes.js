const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/user/get');
const putUserController = require('../controllers/user/put');
const postUserController = require('../controllers/user/post');

router.use(express.json());

router.get('/user/:userId', getUserController.getUserData);
router.put('/user/:userId', putUserController.putUserData);
router.post('/user', postUserController.postNewUser);

module.exports = router;