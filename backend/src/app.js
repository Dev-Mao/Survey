const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Question = require("./models/Question");
const User = require("./models/User");
const service = require("./middlewares/services");
const isAuth = require("./middlewares/auth");
require("dotenv").config();

const app = express();
// Middleware para parsear el cuerpo de la solicitud en JSON
app.use(express.json());
// Middleware para parsear datos codificados en la URL
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Conexión a la base de datos de MongoDB con Mongoose
const uri = process.env.MONGODB_URL;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Endpoint para crear usuario
app.post("/api/signup", async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    results: [],
  });
  user
    .save()
    .then((savedUser) => {
      return res.status(200).send({
        token: service.createToken(savedUser),
        user: savedUser.email,
      });
    })
    .catch((error) => {
      return res.status(500).send({ message: "Error al crear el usuario" });
    });
});

// Endpoint para iniciar sesión
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
      .select("_id email +password")
      .exec();

    if (!user) {
      return res.status(400).send({ message: "Credenciales inválidas" });
    }

    const isMatch = await user.comparePassword(req.body.password);

    if (!isMatch) {
      return res.status(400).send({ message: "Credenciales inválidas" });
    }

    const token = service.createToken(user);
    return res.status(200).send({
      message: "Te has logueado correctamente",
      token,
      user: user.email,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error al ingresar" });
  }
});

// Endpoint para buscar un usuario
app.get("/api/users/:email", isAuth, async (req, res) => {
  const email = req.params.email;

  try {
    // Buscar al usuario por su correo electrónico
    const user = await User.findOne({ email });
    res.status(200).send({ user });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Error al obtener el usuario: ${error}` });
  }
});

// Endpoint para editar usuario
app.patch("/api/users/:email", isAuth, async (req, res) => {
  const email = req.params.email;
  const newResult = req.body.newResult; // El nuevo elemento que deseas agregar al arreglo

  // Utilizar el operador $push para agregar el nuevo resultado al arreglo "results"
  User.findOneAndUpdate(
    { email },
    { $push: { results: newResult } },
    { new: true }
  )
    .then((userUpdate) => {
      if (userUpdate) {
        res.status(200).send({ user: userUpdate });
      } else {
        res.status(404).send({ message: "Usuario no encontrado." });
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .send({ message: `Error al actualizar el usuario: ${error}` });
    });
});

// Endpoint para obtener todas las respuestas almacenadas
app.get("/api/questions", isAuth, async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).send({ questions });
  } catch (error) {
    res.status(500).send({ error: "Error al obtener las preguntas" });
  }
});

// Endpoint para almacenar las preguntas de la encuesta
app.post("/api/questions", isAuth, async (req, res) => {
  try {
    const { questionText, img, options } = req.body;
    const newQuestion = new Question({ questionText, options, img, correct });
    await newQuestion.save();
    res.status(201).send({ message: "Pregunta almacenada exitosamente" });
  } catch (error) {
    res.status(500).send({ error: "Error al almacenar la pregunta" });
  }
});

// Puerto en el que escucha el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor backend iniciado en el puerto ${port}`);
});
