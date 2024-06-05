const client = require('../../data/data_base');

exports.putUserData = async (req, res, next) => {
    try {
        const { new_email, new_name, new_password } = req.body; // Correção aqui
        const userId = req.params.userId;

        const query = `
            UPDATE user_
            SET
            email = $1,
            name_ = $2,
            password_ = $3
            WHERE user_.user_id = $4
        `;

        const result = await client.query(query, [new_email, new_name, new_password, userId]); // Correção aqui

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        return res.status(200).json({ message: 'Dados atualizados com sucesso!' });
    } catch (error) {
        next(error);
    }
};
