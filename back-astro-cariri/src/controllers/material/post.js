const client = require('../../data/data_base');

exports.postMaterial = async (req, res, next) => {

    try {

        const { 
            title, date_, author_id, 
            text, 
            atribute_type, path, caption, alt,
            sequence_
        } = req.body;

        if (!title){
            return res.status(400).json({ error: 'Título não pode ser nulo' });
        }

        if(!date_){
            return res.status(400).json({ error: 'Data não pode ser nula' });
        }

        if(!author_id){
            return res.status(400).json({ error: 'Autor não pode ser nulo' });
        }
        
        if (!topic_id){
            return res.status(400).json({ error: 'Tópico não pode ser nulo' });
        }

        if (!text){
            return res.status(400).json({ error: 'Texto não pode ser nulo' });
        }

        if(!atribute_type){
            return res.status(400).json({ error: 'Tipo de material não pode ser nulo'});
        }
        
        const query_material = 'INSERT INTO Material(title, date_, author_id) VALUES ($1, $2, $3) RETURNING *';
        const values_material = [title, date_, Number(author_id)];
        const result_material = await client.query(query_material, values_material);
        const newMaterial = result_material.rows[0];
        
        const query_topic = 'INSERT INTO Topic(title, text) VALUES ($1, $2) RETURNING *';
        const values_topic = [title, text];
        const result_topic = await client.query(query_topic, values_topic);
        
        const query_img = 'INSERT INTO Image(path, caption, alt) VALUES ($1, $2, $3) RETURNING *';
        const values_img = [path, caption, alt];
        const result_img = await client.query(query_img, values_img);

        const query_materialAttribute = 'INSERT INTO MaterialAttribute(material_id, atribute_type, sequence_) VALUES ($1, $2, $3) RETURNING *';
        const values_materialAttribute = [newMaterial.material_id, atribute_type, sequence_];
        const result_materialAttribute = await client.query(query_materialAttribute, values_materialAttribute);

        return res.status(200).json({ message: 'Material criado com sucesso!', material: newMaterial});
      
    } catch (error) {
        next(error);
      }
    };