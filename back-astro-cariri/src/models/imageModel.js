const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Image = sequelize.define("Image", {
  image_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Image;
