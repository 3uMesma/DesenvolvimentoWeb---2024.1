const { query } = require('express');
const client = require('../../data/data_base');

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const query_user = 'DELETE FROM User_ WHERE user_id = $1';
    await client.query(query_user, [userId]);

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    next(error);
  }
};
