const client = require('../../data/data_base');

exports.getEventCardsData = async (req, res, next) => {
  try {
    const query = 'SELECT e.title, e.requester, e.contact, e.institution, e.date_, et.name_ AS event_type_name FROM event_ e JOIN eventType et ON e.event_type_id = et.type_id';

    const result = await client.query(query);

    // 200 é código que indica que deu certo
    return res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};