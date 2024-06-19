const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/user/get');
const putUserController = require('../controllers/user/put');
const postUserController = require('../controllers/user/post');
const deleteUserController = require('../controllers/user/delete');

router.use(express.json());

router.get('/user/:userId', getUserController.getUserData);
router.put('/user/:userId', putUserController.putUserData);
<<<<<<< HEAD
router.post('/user', postUserController.postNewUser);
=======
router.post('/user/', postUserController.postNewUser);
router.delete('/user/:userId', deleteUserController.deleteUser);
>>>>>>> 6e882d354f94b80b3fe7dae6fe8bd7d2cc0b1858

module.exports = router;