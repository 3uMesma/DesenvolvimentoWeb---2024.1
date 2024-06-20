const client = require('../../data/data_base');

exports.postEvent = async (req, res, next) => {
  try {
    const { titulo, contato, interessado, instituicao, endereco, tipo, data, descricao } = req.body;
    // const { title, requester, contact, institution, address, event_type_id, date_, description } = req.body;

    if (!titulo){
        return res.status(400).json({ error: 'Título não pode ser nulo' });
    }
        
    if(!interessado){
        return res.status(400).json({ error: 'Cliente não pode ser nulo' });
    }
        
    if( !contato){
        return res.status(400).json({ error: 'Contato não pode ser nulo' });
    }
        
    if( !instituicao){
        return res.status(400).json({ error: 'Instituição não pode ser nula' });
    }
        
    if( !endereco){
        return res.status(400).json({ error: 'Endereço não pode ser nulo' });
    }
        
    if( !tipo){
        return res.status(400).json({ error: 'Tipo de evento não pode ser nulo' });
    }
        
    if( !data){
        return res.status(400).json({ error: 'Data não pode ser nula' });
    }
        
    if( !descricao ) {
        return res.status(400).json({ error: 'Descrição não pode ser nula' });
    }

    const query = 'INSERT INTO Event_(title, requester, contact, institution, address, event_type_id, date_, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [titulo, interessado, contato, instituicao, endereco, Number(tipo), data, descricao];
    console.log(values);
    const result = await client.query(query, values);

    const newEvent = result.rows[0];
    return res.status(200).json({ message: 'Evento adicionado com sucesso!', event: newEvent });
  } catch (error) {
    next(error);
  }
};