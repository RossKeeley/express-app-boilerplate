// All /decks routes

const express = require('express');
const router = express.Router();

const { getAllDecks } = require('../controllers/decksController');

// Note: this route is actually /decks due to our index.js setup
router.get('/', getAllDecks);

module.exports = router;
