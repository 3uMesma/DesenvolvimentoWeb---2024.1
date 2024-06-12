const client = require('../../data/data_base');

// função para pegar os materiais pelo titulo
// req contém informações sobre a requisição, res é usado para enviar a resposta e next é usado para passar o controle para o próximo middleware ou rota.
exports.getMaterialData = async (req, res, next) => {
  try {
    const materialId = req.params.materialId;

    // Consulta para obter os titulos dos materiais
    const query = 'SELECT * FROM material where material_id = $1';
    // usamos o método query do cliente do banco de dados para executar uma consulta SQL. O client representa a conexão com o banco de dados.
    const result = await client.query(query, [materialId]);

    // erro 404 é padrão de not found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Material não encontrado' });
    }

    // 200 é código que indica que deu certo
    const materialData = result.rows;
    return res.status(200).json(materialData);
  } catch (error) {
    next(error);
  }
};
