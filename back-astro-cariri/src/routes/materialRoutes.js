const express = require('express');
const router = express.Router();
const deleteMaterialController = require('../controllers/material/delete');
const getAllMaterialController = require('../controllers/material/getAll');
const getMaterialController = require('../controllers/material/get');
const postMaterialController = require('../controllers/material/post');

router.delete('/material/:materialId', deleteMaterialController.deleteMaterial);
router.get('/material/:materialId', getMaterialController.getMaterialData);
router.get('/material', getAllMaterialController.getAllMaterialsTitles);
router.get('/material', postMaterialController.postMaterial);


module.exports = router;