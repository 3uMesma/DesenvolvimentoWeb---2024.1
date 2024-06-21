const express = require("express");
const router = express.Router();
const getEventController = require("../controllers/event/get");
const getAllEventsController = require("../controllers/event/getAll");
const postEventController = require("../controllers/event/post");

router.get("/event/:eventId", getEventController.getEventData);
router.get("/event/", getAllEventsController.getAllEventsData);
router.post("/event/", postEventController.postEvent);

module.exports = router;
