const { getUsuarioEmail } = require("../models/userModel.js");

const getUsuario = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await getUsuarioEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "No se encontró al usuario" });
  }
};

module.exports = getUsuario;
