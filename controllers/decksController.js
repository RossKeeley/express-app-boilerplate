// Controller for all /decks routes

module.exports = {
  getAllDecks(req, res) {
    return res.render('flashcards', { data: 'reached /decks index route!' });
  },
};
