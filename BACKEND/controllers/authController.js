const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { crearUsuario, getUsuarioEmail } = require("../models/userModel.js");

const registrarUsuario = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await crearUsuario(email, hashedPassword, rol, lenguage);
    console.log(`Usuario registrado con email: ${email}`);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar al usuario" });
  }
};

const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUsuarioEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Email o contraseña incorrecta" });
    }
    const passwordValido = await bcrypt.compare(password, user.password);
    if (!passwordValido) {
      return res.status(401).json({ message: "Email o contraseña incorrecta" });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(`Usuario autenticado con su email: ${email}`);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

module.exports = {
  registrarUsuario,
  loginUsuario,
};
