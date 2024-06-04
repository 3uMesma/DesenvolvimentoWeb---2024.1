const express = require('express');
const router = express.Router();
const getEventController = require('../controllers/event/get');

router.get('/event/:eventId', getEventController.getEventData);

module.exports = router;