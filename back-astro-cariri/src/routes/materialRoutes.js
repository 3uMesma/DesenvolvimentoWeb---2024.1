const express = require('express');
const router = express.Router();
const getMaterialController = require('../controllers/material/get');

router.get('/user/:userId', getMaterialController.getAllMaterialsTitles);

module.exports = router;