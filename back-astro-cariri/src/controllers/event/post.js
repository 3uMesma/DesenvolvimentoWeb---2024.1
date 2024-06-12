const client = require('../../data/data_base');

exports.postEvent = async (req, res, next) => {
  try {

    const { title, requester, contact, institution, address, event_type_id, date_, description } = req.body;

    // console.log(title)
    // console.log(requester)
    // console.log(contact)
    // console.log(institution)
    // console.log(address)
    // console.log(Number(event_type_id)+5)
    // console.log(date_)
    // console.log(description)

    if (!title){
        return res.status(400).json({ error: 'Título não pode ser nulo' });
    }
        
    if(!requester){
        return res.status(400).json({ error: 'Cliente não pode ser nulo' });
    }
        
    if( !contact){
        return res.status(400).json({ error: 'Contato não pode ser nulo' });
    }
        
    if( !institution){
        return res.status(400).json({ error: 'Instituição não pode ser nula' });
    }
        
    if( !address){
        return res.status(400).json({ error: 'Endereço não pode ser nulo' });
    }
        
    if( !event_type_id){
        return res.status(400).json({ error: 'Tipo de evento não pode ser nulo' });
    }
        
    if( !date_){
        return res.status(400).json({ error: 'Data não pode ser nula' });
    }
        
    if( !description ) {
        return res.status(400).json({ error: 'Descrição não pode ser nula' });
    }

    const query = 'INSERT INTO Event_(title, requester, contact, institution, address, event_type_id, date_, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [title, requester, contact, institution, address, Number(event_type_id), date_, description];
    console.log(values);
    const result = await client.query(query, values);

    const newEvent = result.rows[0];
    return res.status(200).json({ message: 'Evento adicionado com sucesso!', event: newEvent });
  } catch (error) {
    next(error);
  }
};