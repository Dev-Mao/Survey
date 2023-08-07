const mongoose = require("mongoose");

// Esquema para las opciones
const optionSchema = new mongoose.Schema({
  letter: String,
  text: String,
  imageUrl: String,
});

// Esquema para las preguntas
const questionSchema = new mongoose.Schema({
  questionText: String,
  img: String,
  options: [optionSchema],
  correct: String,
});

// Modelo para las preguntas
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
