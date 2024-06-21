const { query } = require("express");
const client = require("../../data/data_base");

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const query_user = "UPDATE User_ SET is_active = false WHERE user_id = $1";
    await client.query(query_user, [userId]);

    return res.status(200).json({ message: "Usuário desativado com sucesso" });
  } catch (error) {
    next(error);
  }
};
