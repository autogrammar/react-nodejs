const express = require('express');
const router = express.Router();

// GET all stories
router.get('/', async (req, res) => {
  // TODO: Implement fetching all stories from the database
  res.json([{ id: 1, title: 'Example Story', content: 'Once upon a time...' }]);
});

// POST a new story
router.post('/', async (req, res) => {
  // TODO: Implement creating a new story
  res.status(201).json({ message: 'Story created successfully' });
});

module.exports = router;