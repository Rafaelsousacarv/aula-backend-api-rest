const express = require("express");
const instrutores = require("./controllers/instrutores");
const aulas = require("./controllers/aulas");
const rotas = express();

rotas.get("/", (req, res) => {
  return res.send("Paginal Inicial");
});

rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.listarInstrutoresPorID);
rotas.post("/instrutores", instrutores.cadastraInstrutor);
rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);
rotas.patch("/instrutores/:id/status", instrutores.atualizarStatusInstrutor);
rotas.delete("/instrutores/:id", instrutores.excluirInstrutor);

rotas.post("/instrutores/:idInstrutor/aulas", aulas.cadastrarAula);
rotas.get("/aulas", aulas.listarAulas);
rotas.get("/aulas/:id", aulas.obterAula);
rotas.get("/instrutores/:idInstrutor/aulas", aulas.listarAulasPorInstrutor);

module.exports = rotas;
