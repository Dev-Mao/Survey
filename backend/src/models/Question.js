const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  letter: String,
  text: String,
  imageUrl: String,
});

const questionSchema = new mongoose.Schema({
  questionText: String,
  img: String,
  options: [optionSchema],
  correct: String,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
