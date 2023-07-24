const express = require("express");
const instrutores = require("./controllers/instrutores");
const rotas = express();

rotas.get("/", (req, res) => {
  return res.send("Paginal Inicial");
});

rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.listarInstrutoresPorID);

module.exports = rotas;
