const client = require("../../data/data_base");

// Função para pegar a lista de todos os usuários
exports.getAllUsers = async (req, res, next) => {
  try {
    // Consulta para obter todos os dados dos usuários
    const query = "SELECT name_, user_id FROM user_ u WHERE is_active = true";
    const result = await client.query(query);

    // 200 é código que indica que deu certo
    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};
