const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Question = require('./models/Question')
require('dotenv').config();


const app = express();
// Middleware para parsear el cuerpo de la solicitud en JSON
app.use(express.json()); 
// Middleware para parsear datos codificados en la URL
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

// Conexión a la base de datos de MongoDB con Mongoose
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


// Endpoint para obtener todas las respuestas almacenadas
app.get('/api/questions', async (req, res) => {
    try {
      const questions = await Question.find({});
      res.status(200).send({ questions });
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
      res.status(500).send({ error: 'Error al obtener las preguntas' });
    }
  });
  
// Endpoint para almacenar las respuestas de la encuesta
  app.post('/api/questions', async (req, res) => {
    try {
      const { questionText, img, options } = req.body;
      const newQuestion = new Question({ questionText, options, img });
      await newQuestion.save();
      res.status(201).send({ message: 'Pregunta almacenada exitosamente' });
    } catch (error) {
      res.status(500).send({ error: 'Error al almacenar la Pregunta' });
    }
});

// Endpoint para verificar las respuestas del usuario
app.post('/api/answers', async (req, res) => {
    try {
      const { questionId, userAnswer } = req.body;
  
      // Obtener la pregunta de la base de datos
      const question = await Question.findById(questionId);
      if (!question) {
        return res.status(404).json({ error: 'Pregunta no encontrada' });
      }
  
      // Verificar si la respuesta del usuario es correcta
      const isCorrect = userAnswer === question.correct;
  
      // Enviar una respuesta al usuario
      res.json({ isCorrect, message: isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta' });
    } catch (error) {
      console.error('Error al verificar la respuesta:', error);
      res.status(500).json({ error: 'Error al verificar la respuesta' });
    }
  });

// Puerto en el que escucha el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor backend iniciado en el puerto ${port}`);
});
