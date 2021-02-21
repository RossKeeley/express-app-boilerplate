// All /users routes

const express = require('express');
const router = express.Router();

const { getAllUsers } = require('../controllers/usersController');

// Note: this route is actually /users due to our index.js setup
router.get('/', getAllUsers);

module.exports = router;
