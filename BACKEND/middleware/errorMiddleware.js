const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Error en el servidor" });
};

module.exports = errorHandler;
