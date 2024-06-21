const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const MaterialAttribute = sequelize.define("MaterialAttribute", {
  material_id: {
    type: DataTypes.INTEGER,
  },
  attribute_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  attribute_type: {
    type: DataTypes.INTEGER,
  },
  sequence_: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MaterialAttribute;
