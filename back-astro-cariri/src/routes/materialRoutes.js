const express = require('express');
const router = express.Router();
const deleteMaterialController = require('../controllers/material/delete');
const getMaterialController = require('../controllers/material/get');

router.delete('/material/:materialId', deleteMaterialController.deleteMaterial);
router.get('/material/:materialId', getMaterialController.getAllMaterialsTitles);

module.exports = router;