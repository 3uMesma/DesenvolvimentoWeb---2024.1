const express = require("express");
const router = express.Router();
const getAllUsersConytoller = require("../controllers/users/get");

router.use(express.json());

router.get("/users", getAllUsersConytoller.getAllUsers);

module.exports = router;
