const express = require('express');
const router = express.Router();

// GET declinations for a word
router.get('/:id/declinations', async (req, res) => {
  // TODO: Implement fetching declinations for a specific word
  res.json([{ id: 1, word_id: req.params.id, declination: 'example', tense: 'present', person: 'first' }]);
});

module.exports = router;