// Controller for all /users routes

module.exports = {
  getAllUsers(req, res) {
    return res.render('flashcards', { data: 'reached /users index route!' });
  },
};
