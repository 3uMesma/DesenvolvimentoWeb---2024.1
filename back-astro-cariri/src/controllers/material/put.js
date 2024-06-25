const client = require("../../data/data_base");

exports.putMaterials = async (req, res, next) => {
  try {
    const { title, date, author, topics } = req.body;
    const materialId = req.params.materialId;

    if (!title) {
      return res.status(400).json({ error: "Título não pode ser nulo" });
    }

    if (!date) {
      return res.status(400).json({ error: "Data não pode ser nula" });
    }

    if (!author) {
      return res.status(400).json({ error: "Autor não pode ser nulo" });
    }
    
    if (!topics) {
      return res
      .status(400)
      .json({ error: "O material deve conter pelo menos um tópico." });
    }



    const query_user = "SELECT user_id FROM User_ WHERE name_ = $1";
    const result_user = await client.query(query_user, [author]);
    if (result_user.rows.length === 0) {
      return res.status(404).json({ message: "Autor não encontrado" });
    }
    const author_id = result_user.rows[0].user_id;



    const query_material = `
            UPDATE Material
            SET
            title = $1,
            date_ = $2,
            author_id = $3
            WHERE Material.material_id = $4`;
    const values_material = [title, date, Number(author_id), materialId];
    const result_material = await client.query(query_material, values_material);

    if (result_material.rowCount === 0) {
      return res.status(404).json({ message: "Material não encontrado" });
    }


    const query_existing_topics =
      "SELECT t.topic_id " +
      "FROM Topic t " +
      "INNER JOIN MaterialAttribute ma ON t.topic_id = ma.attribute_id " +
      "WHERE ma.material_id = $1 ";
    const existing_topics = (await client.query(query_existing_topics, [materialId])).rows;

    for (const topic of topics) {
      if(topic.id){
        const index = existing_topics.indexOf({topic_id: topic.id});
        existing_topics.splice(index);
        

        const query_topic = `
                  UPDATE Topic
                  SET
                  title = $1,
                  text = $2
                  WHERE Topic.topic_id = $3`;
        const values_topic = [topic.title, topic.text, topic.id];
        const result_topic = await client.query(query_topic, values_topic);
      } else {
        const query_topic = `INSERT INTO Topic(title, text) VALUES ($1, $2) RETURNING *`;
        const values_topic = [topic.title, topic.text];
        const result_topic = await client.query(query_topic, values_topic);

        const query_material_attribute = `
          INSERT INTO MaterialAttribute(material_id, attribute_id, attribute_type, sequence_) 
          VALUES ($1, $2, $3, $4) RETURNING *`;
        const values_material_attribute = [
          materialId,
          result_topic.rows[0].topic_id,
          1,
          topic.sequence,
        ];
        const result_material_attribute = await client.query(query_material_attribute, values_material_attribute);
      }
    }

    console.log(existing_topics)
    for(const topic of existing_topics){
      const query_attribute = "DELETE FROM MaterialAttribute WHERE attribute_id = $1";
      const query_material = "DELETE FROM Topic WHERE topic_id = $1";
      await client.query(query_attribute, [topic.topic_id]);
      await client.query(query_material, [topic.topic_id]);
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

    return res
      .status(200)
      .json({ message: "Material atualizado com sucesso!" });
  } catch (error) {
    next(error);
  }
};
