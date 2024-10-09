const express = require('express');
const router = express.Router();

// POST a new sentence
router.post('/', async (req, res) => {
  // TODO: Implement adding a new sentence to a story
  res.status(201).json({ message: 'Sentence added successfully' });
});

module.exports = router;