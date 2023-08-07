const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

//Crear token
function createToken(user) {
  const payload = {
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };

  return jwt.encode(payload, secretKey);
}

// Decodificar token
function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, secretKey);

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: "El token ha expirado",
        });
      }
      resolve(payload);
    } catch (err) {
      reject({
        status: 500,
        message: "Token inválido",
      });
    }
  });
  return decoded;
}

module.exports = {
  createToken,
  decodeToken,
};
