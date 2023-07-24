const { instrutores } = require("../bancodedados");

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

module.exports = {
  listarInstrutores,
  listarInstrutoresPorID,
};
