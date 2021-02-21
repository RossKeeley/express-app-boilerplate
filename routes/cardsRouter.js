// All /cards routes

const express = require('express');
const router = express.Router();

const { getAllCards } = require('../controllers/cardsController');

// Note: this route is actually /cards due to our index.js setup
router.get('/', getAllCards);

module.exports = router;
