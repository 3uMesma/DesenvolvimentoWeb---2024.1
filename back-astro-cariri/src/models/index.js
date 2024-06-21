const User = require("./userModel");
const Event = require("./eventModel");
const EventType = require("./eventTypeModel");
const Material = require("./materialModel");
const Image = require("./imageModel");
const Topic = require("./topicModel");
const MaterialAttribute = require("./materialAttributeModel");
// const AttributeType = require('./attributeTypeModel');

// definir relações de chaves estrangeiras aqui
EventType.hasMany(Event, { foreignKey: "event_type_id" });
User.hasMany(Material, { foreignKey: "author_id" });
Material.hasMany(MaterialAttribute, { foreignKey: "material_id" });
// AttributeType.hasMany(MaterialAttribute, { foreignKey: 'attribute_type_id' })
// Material.hasMany(Image, { foreignKey: 'material_id' })
// Material.hasMany(Topic, { foreignKey: 'material_id' })

// module.exports = { User, Event, EventType, Material, MaterialAttribute, AttributeType };
module.exports = {
  User,
  Event,
  EventType,
  Material,
  Image,
  Topic,
  MaterialAttribute,
};
