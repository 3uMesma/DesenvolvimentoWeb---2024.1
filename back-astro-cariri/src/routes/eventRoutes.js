const express = require("express");
const router = express.Router();
const getEventController = require("../controllers/event/get");
const postEventController = require("../controllers/event/post");

router.get("/event/:eventId", getEventController.getEventData);
router.post("/event/", postEventController.postEvent);

module.exports = router;
