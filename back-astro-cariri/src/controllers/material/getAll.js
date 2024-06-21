const client = require("../../data/data_base");

// função para pegar os materiais pelo titulo
// req contém informações sobre a requisição, res é usado para enviar a resposta e next é usado para passar o controle para o próximo middleware ou rota.
exports.getAllMaterialsTitles = async (req, res, next) => {
  try {
    // const materialsTitles = req.params.materialsTitles;

    // Consulta para obter os titulos dos materiais
    const query = "SELECT title, material_id FROM Material";
    // usamos o método query do cliente do banco de dados para executar uma consulta SQL. O client representa a conexão com o banco de dados.
    const result = await client.query(query);

    // erro 404 é padrão de not found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Materiais não encontrados" });
    }

    // 200 é código que indica que deu certo
    const materialsTitlesData = result.rows;
    return res.status(200).json(materialsTitlesData);
  } catch (error) {
    next(error);
  }
};
