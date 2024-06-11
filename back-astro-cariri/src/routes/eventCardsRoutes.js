const express = require('express');
const router = express.Router();
const getEventCardsController = require('../controllers/event-cards/get');

router.get('/event-cards/', getEventCardsController.getEventCardsData);

module.exports = router;