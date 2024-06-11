const client = require('../../data/data_base');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Consulta para obter as informações do usuário com base no nome de usuário
    const query = 'SELECT * FROM user_ WHERE name_  = $1 AND password_  = $2;';
    const result = await client.query(query, [username, password]);

    // Verifica se o usuário foi encontrado com as credenciais fornecidas
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Se chegou até aqui, o usuário está autenticado com sucesso
    // Aqui você pode retornar qualquer informação adicional que deseja enviar de volta ao cliente
    return res.status(200).json({ message: 'Login bem-sucedido! :)'});

  } catch (error) {
    next(error);
  }
};
