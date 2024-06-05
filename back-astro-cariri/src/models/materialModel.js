const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const Material = sequelize.define('Material', {
  material_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Material;