const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./middleware/errorMiddleware.js");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
