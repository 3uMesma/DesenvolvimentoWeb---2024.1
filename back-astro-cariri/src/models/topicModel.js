const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const Topic = sequelize.define('Topic', {
  topic_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Topic;