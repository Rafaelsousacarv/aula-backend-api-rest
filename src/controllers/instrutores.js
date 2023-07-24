const { instrutores } = require("../bancodedados");
let { identificadorInstrutor } = require("../bancodedados");

const listarInstrutores = (req, res) => {
  return res.status(200).json(instrutores);
};

const listarInstrutoresPorID = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res
      .status(404)
      .json({ mensagem: `Instrutor com o id:${id} não encontrado.` });
  }

  return res.status(200).json(instrutor);
};

const cadastraInstrutor = (req, res) => {
  const { nome, email, status } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ mensagem: "O email é obrigatório" });
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome: nome,
    email: email,
    status: status ?? true,
  };
  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ mensagem: "O email é obrigatório" });
  }


  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res
      .status(404)
      .json({ mensagem: `Instrutor com o id:${id} não encontrado.` });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;
  return res.status(203).send();
};

module.exports = {
  listarInstrutores,
  listarInstrutoresPorID,
  cadastraInstrutor,
  atualizarInstrutor,
};
