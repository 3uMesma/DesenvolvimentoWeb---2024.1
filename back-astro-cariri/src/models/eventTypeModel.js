const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const EventType = sequelize.define('EventType', {
  type_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name_: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = EventType;
