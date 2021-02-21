// Controller for all /cards routes

module.exports = {
  getAllCards(req, res) {
    return res.render('flashcards', { data: 'reached /cards index route!' });
  },
};
