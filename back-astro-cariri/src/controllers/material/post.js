const client = require("../../data/data_base");

exports.postMaterial = async (req, res, next) => {
  try {
    const { title, date, author, topics, images } = req.body;

    const query_user = "SELECT user_id FROM User_ WHERE name_ = $1";
    const result_user = await client.query(query_user, [author]);
    if (result_user.rows.length === 0) {
      return res.status(404).json({ message: "Autor não encontrado" });
    }
    const author_id = result_user.rows[0].user_id;

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

    const query_material =
      "INSERT INTO Material(title, date_, author_id) VALUES ($1, $2, $3) RETURNING *";
    const values_material = [title, date, Number(author_id)];
    const result_material = await client.query(query_material, values_material);
    const newMaterial = result_material.rows[0];

    for (const topic of topics) {
      const query_topic =
        "INSERT INTO Topic(title, text) VALUES ($1, $2) RETURNING *";
      const values_topic = [topic.topic, topic.text];
      const result_topic = await client.query(query_topic, values_topic);
      const newTopic = result_topic.rows[0];

      const query_materialAttribute =
        "INSERT INTO MaterialAttribute(material_id, attribute_id, attribute_type, sequence_) VALUES ($1, $2, $3, $4) RETURNING *";
      const values_materialAttribute = [
        newMaterial.material_id,
        newTopic.topic_id,
        1,
        topic.sequence,
      ];
      const result_materialAttribute = await client.query(
        query_materialAttribute,
        values_materialAttribute,
      );
    }

    // for (const image of images) {
    //     const query_img = 'INSERT INTO Image(path, caption, alt) VALUES ($1, $2, $3) RETURNING *';
    //     const values_img = [image.file, image.caption, image.alt];
    //     const result_img = await client.query(query_img, values_img);
    //     const newImage = result_img.rows[0];

    //     const query_materialAttribute = 'INSERT INTO MaterialAttribute(material_id, attribute_id, attribute_type, sequence_) VALUES ($1, $2, $3, $4) RETURNING *';
    //     const values_materialAttribute = [newMaterial.material_id, newImage.image_id, 2, image.sequence];
    //     const result_materialAttribute = await client.query(query_materialAttribute, values_materialAttribute);
    // }

    return res
      .status(200)
      .json({ message: "Material criado com sucesso!", material: newMaterial });
  } catch (error) {
    next(error);
  }
};
