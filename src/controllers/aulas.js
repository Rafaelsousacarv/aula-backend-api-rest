let { identificadorAula, instrutores, aulas } = require("../bancodedados");

const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res
      .status(404)
      .json({ mensagem: `Instrutor com o id:${idInstrutor} não encontrado.` });
  }

  if (!titulo) {
    return res.status(404).json({ mensagem: "O titulo não existe" });
  }

  if (!descricao) {
    return res.status(400).json({ mensagem: "O descrição é obrigatório" });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao,
  };

  aulas.push(aula);

  return res.status(201).json(aula);
};

const listarAulas = (req, res) => {
  return res.status(200).json(aulas);
};

const obterAula = (req, res) => {
  const { id } = req.params;

  const aula = aulas.find((aula) => {
    return aula.id === Number(id);
  });

  if (!aula) {
    return res
      .status(404)
      .json({ mensagem: `Aula com o id:${id} não encontrada` });
  }

  return res.status(200).json(aula);
};

const listarAulasPorInstrutor = (req, res) => {
  const { idInstrutor } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res
      .status(404)
      .json({ mensagem: `Instrutor com o id:${idInstrutor} não encontrado.` });
  }

  const aulasEncontradas = aulas.filter((aula) => {
    return aula.instrutor_id === Number(instrutor.id);
  });

  return res.status(200).json(aulasEncontradas);
};

module.exports = {
  cadastrarAula,
  listarAulas,
  obterAula,
  listarAulasPorInstrutor
};
