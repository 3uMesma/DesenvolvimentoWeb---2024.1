const client = require('../../data/data_base');

exports.putMaterials = async (req, res, next) => {
    try {
        const { 
            title, date_, author_id, 
            text, 
            atribute_type, path, caption, alt,
            sequence_
        } = req.body;

        const materialId = req.params.materialId;
        const query_material = `
            UPDATE Material
            SET
            title = $1,
            date = $2,
            author_id = $3
            WHERE Material.material_id = $4
        `;
        const values_material = [title, date_, Number(author_id), materialId];
        const result_material = await client.query(query_material, values_material);

        const topicId = req.params.topicId;
        const query_topic = `
            UPDATE Topic
            SET
            title = $1,
            text = $2
            WHERE Topic.topic_id = $3
        `;
        const values_topic = [title, text, topicId];
        const result_topic = await client.query(query_topic, values_topic);

        const imageId = req.params.imageId;
        const query_img = `
            UPDATE user_
            SET
            path = $1,
            caption = $2,
            alt = $3
            WHERE Image.image_id = $4
        `;
        const values_img = [path, caption, alt, imageId];
        const result_img = await client.query(query_img, values_img);

        const materialAttributeId = req.params.materialAttributeId;
        const query_materialAttribute = `
        UPDATE user_
        SET
        material_id = $1,
        atribute_type = $2,
        sequence_ = $3
        WHERE MaterialAttribute.attribute_id = $4
        `;
        const values_materialAttribute = [materialId, atribute_type, sequence_, materialAttributeId];
        const result_materialAttribute = await client.query(query_materialAttribute, values_materialAttribute);


        if (result_material.rowCount === 0) {
            return res.status(404).json({ message: 'Material não encontrado' });
        }

        return res.status(200).json({ message: 'Material atualizado com sucesso!' });
    } catch (error) {
        next(error);
    }
};