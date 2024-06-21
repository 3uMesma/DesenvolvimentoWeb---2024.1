const client = require("../../data/data_base");

exports.getMaterialData = async (req, res, next) => {
  try {
    // console.log(req.params);
    const materialId = req.params.materialId;
    // console.log('fetching material', materialId);

    const query_material =
      "SELECT m.title, u.name_ " +
      "AS author FROM Material m " +
      "JOIN User_ u ON u.user_id = m.author_id " +
      "WHERE m.material_id = $1";

    const query_topics =
      "SELECT t.title AS topic, t.text, ma.sequence_ AS sequence, ma.attribute_type AS type, t.topic_id AS id " +
      "FROM Topic t " +
      "INNER JOIN MaterialAttribute ma ON t.topic_id = ma.attribute_id " +
      "WHERE ma.material_id = $1 " +
      "ORDER BY ma.sequence_; ";

    const query_images =
      "SELECT i.path, i.caption, i.alt, ma.sequence_ AS sequence, ma.attribute_type AS type, i.image_id AS id " +
      "FROM Image i " +
      "INNER JOIN MaterialAttribute ma ON i.image_id = ma.attribute_id " +
      "WHERE ma.material_id = $1 " +
      "ORDER BY ma.sequence_; ";

    const material = await client.query(query_material, [materialId]);
    // erro 404 é padrão de not found
    if (material.rows.length === 0) {
      return res.status(404).json({ message: "Material não encontrado" });
    }
    const topics = await client.query(query_topics, [materialId]);
    const images = await client.query(query_images, [materialId]);

    // const elements = images.rows.concat(topics.rows);
    // elements.sort(function (a, b) {
    //   return parseFloat(a.sequence) - parseFloat(b.sequence);
    // });

    // console.log('MATERIAL')
    // console.log(material.rows)
    // console.log('TOPICOS')
    // console.log(topics.rows)
    // console.log('IMAGENS')
    // console.log(images.rows)

    // const result = { info: material.rows[0], elements: elements };
    const result = { info: material.rows[0], topics: topics.rows, images: images.rows };

    // 200 é código que indica que deu certo
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
