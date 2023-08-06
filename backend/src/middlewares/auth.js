"use strict";
const service = require("./services");

function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No tienes autorización" });
  }

  const token = req.headers.authorization.split(" ")[1];

  service
    .decodeToken(token)
    .then((payload) => {
      req.user = payload.sub;
      next();
    })
    .catch((response) => {
      res.status(response.status);
    });
}

module.exports = isAuth;
