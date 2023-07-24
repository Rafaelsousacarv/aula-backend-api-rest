const express = require("express");
const instrutores = require("./controllers/instrutores");
const rotas = express();

rotas.get("/", (req, res) => {
  return res.send("Paginal Inicial");
});

rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.listarInstrutoresPorID);
rotas.post("/instrutores", instrutores.cadastraInstrutor);
rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);

module.exports = rotas;
