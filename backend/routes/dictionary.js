const express = require('express');
const router = express.Router();

// GET all dictionary words
router.get('/', async (req, res) => {
  // TODO: Implement fetching all dictionary words from the database
  res.json([{ id: 1, word: 'example', parameters: {} }]);
});

// POST a new dictionary word
router.post('/', async (req, res) => {
  // TODO: Implement adding a new word to the dictionary
  res.status(201).json({ message: 'Word added successfully' });
});

module.exports = router;