const { DataTypes } = require("sequelize");
const { sequelize } = require("../../utils/db");

const AttributeType = sequelize.define("AttributeType", {
  attribute_type_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name_: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequence_: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = AttributeType;
