const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  loginUsuario,
} = require("../controllers/authController.js");

router.post("/usuarios", registrarUsuario);
router.post("/login", loginUsuario);

module.exports = router;
