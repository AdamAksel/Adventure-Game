const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = Scores = mongoose.model('scores', ScoreSchema);
