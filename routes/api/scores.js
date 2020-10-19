const express = require('express');
const router = express.Router();

//Scores model
const Score = require('../../models/Scores');

// route GET api/scores
// @desc GET all scores
// access Public
router.get('/', (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .then((scores) => res.json(scores));
});

// route POST api/scores
// @desc add a score
// access Public
router.post('/', (req, res) => {
  const newScore = new Score({
    name: req.body.name,
    score: req.body.score,
  });

  newScore.save().then((score) => res.json(score));
});

// route DELETE api/scores
// @desc delete a score
// access Public
router.delete('/:id', (req, res) => {
  Score.findById(req.params.id)
    .then((score) => score.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});


module.exports = router;
