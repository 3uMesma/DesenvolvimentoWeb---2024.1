const { query } = require("express");
const client = require("../../data/data_base");

exports.deleteMaterial = async (req, res, next) => {
  try {
    const materialId = req.params.materialId;

    const query_attribute =
      "DELETE FROM MaterialAttribute WHERE material_id = $1";
    const query_material = "DELETE FROM Material WHERE  material_id = $1";
    await client.query(query_attribute, [materialId]);
    await client.query(query_material, [materialId]);

    return res.status(200).json({ message: "Material deletado com sucesso" });
  } catch (error) {
    next(error);
  }
};
