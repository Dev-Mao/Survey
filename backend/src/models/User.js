const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

// Esquema para los usuarios
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
});

UserSchema.pre("save", function (next) {
  // Verificar si la contraseña ha sido modificada antes de guardar el documento
  if (!this.isModified("password")) return next();
  // Generar un "salt" para el hash
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // Generar el hash de la contraseña utilizando el salt generado
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      // Reemplazar la contraseña original con el hash generado
      this.password = hash;
      next();
    });
  });
});

// Agregar un método personalizado al esquema de modelo para comparar las contraseñas
UserSchema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
