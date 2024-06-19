const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/user/get');
const putUserController = require('../controllers/user/put');
const postUserController = require('../controllers/user/post');
const deleteUserController = require('../controllers/user/delete');

router.use(express.json());

router.get('/user/:userId', getUserController.getUserData);
router.put('/user/:userId', putUserController.putUserData);

router.post('/user/', postUserController.postNewUser);
router.delete('/user/:userId', deleteUserController.deleteUser);

module.exports = router;