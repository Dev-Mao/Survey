const service = require("./services");

// Función para verificar si un usuario está autenticado o no 
function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No tienes autorización" });
  }

  const token = req.headers.authorization.split(" ")[1];

  service
    .decodeToken(token)
    .then(() => {
      next();
    })
    .catch((response) => {
      res.status(response.status);
    });
}

module.exports = isAuth;
