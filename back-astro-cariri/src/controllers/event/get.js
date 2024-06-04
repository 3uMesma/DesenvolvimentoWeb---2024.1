const client = require('../../data/data_base');

// função para pegar as infos do evento
// req contém informações sobre a requisição, res é usado para enviar a resposta e next é usado para passar o controle para o próximo middleware ou rota.
exports.getEventData = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;

    // Consulta para obter os dados do evento pelo ID
    const query = 'SELECT e.title, e.requester, e.institution, e.date_, et.name_ AS event_type_name FROM event_ e JOIN eventType et ON e.event_type_id = et.type_id WHERE e.event_id = $1';
    // usamos o método query do cliente do banco de dados para executar uma consulta SQL. O client representa a conexão com o banco de dados.
    const result = await client.query(query, [eventId]);

    // erro 404 é padrão de not found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    // 200 é código que indica que deu certo
    const eventData = result.rows[0];
    return res.status(200).json(eventData);
  } catch (error) {
    next(error);
  }
};