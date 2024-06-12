const express = require("express");
const getUsuario = require("../controllers/userController.js");
const authToken = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/usuarios", authToken, getUsuario);

module.exports = router;
