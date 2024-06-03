const client = require('../../data/data_base');

// função para pegar as infos do usuário
// req contém informações sobre a requisição, res é usado para enviar a resposta e next é usado para passar o controle para o próximo middleware ou rota.
exports.getUserData = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Consulta para obter os dados do usuário pelo ID
    const query = 'SELECT name_, email, password_ FROM user_ u WHERE u.user_id = $1';
    // usamos o método query do cliente do banco de dados para executar uma consulta SQL. O client representa a conexão com o banco de dados.
    const result = await client.query(query, [userId]);

    // erro 404 é padrão de not found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // 200 é código que indica que deu certo
    const userData = result.rows[0];
    return res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};
