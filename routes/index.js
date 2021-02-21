// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const usersRouter = require('./usersRouter');
const decksRouter = require('./decksRouter');
const cardsRouter = require('./cardsRouter');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/decks', decksRouter);
router.use('/cards', cardsRouter);

module.exports = router;
