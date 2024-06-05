const express = require('express');
const router = express.Router();
const deleteMaterialController = require('../controllers/material/delete');

router.delete('/material/:materialId', deleteMaterialController.deleteMaterial);

module.exports = router;