const User = require('./userModel');
const Event = require('./eventModel');
const EventType = require('./eventTypeModel');

// definir relações de chaves estrangeiras aqui
EventType.hasMany(Event, { foreignKey: 'event_type_id' });

module.exports = { User, Event, EventType };