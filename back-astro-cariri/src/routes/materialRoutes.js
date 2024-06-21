const express = require("express");
const router = express.Router();
const deleteMaterialController = require("../controllers/material/delete");
const getAllMaterialController = require("../controllers/material/getAll");
const getMaterialController = require("../controllers/material/get");

router.delete("/material/:materialId", deleteMaterialController.deleteMaterial);
router.get("/material/:materialId", getMaterialController.getMaterialData);
router.get("/material", getAllMaterialController.getAllMaterialsTitles);

module.exports = router;
