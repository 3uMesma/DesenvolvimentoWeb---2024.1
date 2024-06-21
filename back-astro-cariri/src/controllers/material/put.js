const client = require('../../data/data_base');

exports.putMaterials = async (req, res, next) => {
    console.log("aquiii")
    try {
        const { 
            title, date, author, 
            topics,
            images
        } = req.body;

        const query_user = 'SELECT user_id FROM User_ WHERE name_ = $1';
        const result_user = await client.query(query_user, [author]);
        // if (result_user.rows.length === 0) {
        //     console.log("autor nao encontrado")
        //     return res.status(404).json({ message: "Autor não encontrado" });
        // }
        const author_id = result_user.rows[0].user_id;
        console.log(author_id)

        if (!title){
            return res.status(400).json({ error: 'Título não pode ser nulo' });
        }

        if(!date){
            return res.status(400).json({ error: 'Data não pode ser nula' });
        }

        if(!author){
            return res.status(400).json({ error: 'Autor não pode ser nulo' });
        }
        
        if (!topics){
            return res.status(400).json({ error: 'O material deve conter pelo menos um tópico.' });
        }

        const materialId = req.params.materialId;
        const query_material = `
            UPDATE Material
            SET
            title = $1,
            date_ = $2,
            author_id = $3
            WHERE Material.material_id = $4
        `;
        const values_material = [title, date, Number(author_id), materialId];
        const result_material = await client.query(query_material, values_material);
        console.log(result_material.rows[0])

        // if (result_material.rowCount === 0) {
        //     console.log("material nao encontrado")
        //     return res.status(404).json({ message: 'Material não encontrado' });
        // }

        for (const topic of topics) {
            const query_topic = `
                UPDATE Topic
                SET
                title = $1,
                text = $2
                WHERE Topic.topic_id = $3
            `;
            const values_topic = [topic.topic, topic.text, topic.topic_id];
            const result_topic = await client.query(query_topic, values_topic);
        }

        // for(const image of images) {
        //     const query_img = `
        //         UPDATE image
        //         SET
        //         path = $1,
        //         caption = $2,
        //         alt = $3
        //         WHERE Image.image_id = $4
        //     `;
        //     const values_img = [image.file, image.caption, image.alt];
        //     const result_img = await client.query(query_img, values_img);
        // }

        return res.status(200).json({ message: 'Material atualizado com sucesso!' });
    } catch (error) {
        next(error);
    }
};