const client = require("../../data/data_base");

// função para pegar os materiais pelo titulo
// req contém informações sobre a requisição, res é usado para enviar a resposta e next é usado para passar o controle para o próximo middleware ou rota.
exports.getAllMaterialsTitles = async (req, res, next) => {
  try {
    const materialsTitle = req.query.titulo;

    let result = "";
    if (materialsTitle) {
      const query =
        "SELECT title, material_id FROM Material WHERE title LIKE $1";
      const values = [`%${materialsTitle}%`];
      result = await client.query(query, values);

      // erro 404 é padrão de not found
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Materiais não encontrados" });
      }

      // 200 é código que indica que deu certo
      const materialsData = result.rows;
      return res.status(200).json(materialsData);
    }

    const query = "SELECT title, material_id FROM Material";
    result = await client.query(query);

    // erro 404 é padrão de not found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Materiais não encontrados" });
    }

    // 200 é código que indica que deu certo
    const materialsData = result.rows;
    return res.status(200).json(materialsData);
  } catch (error) {
    next(error);
  }
};
