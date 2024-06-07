const client = require('../../data/data_base');

exports.postNewUser = async (req, res) => {

    const {username, email, password, confirmation_password} = req.body;


    //Algum dos campos não é preenchido
    if (!username || !email || !password || !confirmation_password){
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    //As senhas são diferentes
    if (password != confirmation_password){
        return res.status(400).json({message: 'As senhas precisam ser iguais!'});
    }
    

    try {
        //Inserindo novo usuário no BD
        const result = await client.query('INSERT INTO User_(name_, email, password_) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);

        const newUser = result.rows[0];
        return res.status(200).json({ message: 'Usuário adicionado com sucesso!', user: newUser });
    } catch (err){
        console.error(err);
        return res.status(500).json({message: 'Erro ao criar usuário!', error: err});
    }
    
};