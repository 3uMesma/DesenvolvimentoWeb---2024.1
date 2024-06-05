# Caso de uso: Solicitação de atividade
**Ator Principal:** Professor

## Interessados e Interesses

- Professor (solicitante): busca solicitar a realização de atividades educativas para complementar a grade curricular por este oferecida.
- Integrantes do coletivo AstroCariri: buscam manter um canal aberto para articular junto a educadores a realização de atividades.
- Estudantes: buscam a realização da sua formação educacional e, portanto, são beneficiados com o correto e eficiente funcionamento deste caso de uso.
## Pré-condições

- O professor realizou o acesso ao referido site.

## Pós-condições
- Fica registrada uma solicitação de atividade descrita nos seguintes termos:
  - **ID do evento (event_id):** Identificação serial gerada automaticamente quando efetivado o envio da solicitação, para posterior armazenamento e recuperação a partir do banco de dados do site;
  - **Título da Proposta (title):** uma identificação sumária da proposta de atividade, tal qual descrita pelo solicitante;
  - **Nome do interessado (requester)**;
  - **Forma de contato (contact):** dados para contato, este pode ser e-mail ou telefone de acordo com a preferência do solicitante.
  - **Instituição do interessado (institution):** nome da instituição a qual o requerente representa;
  - **Endereço da Instituição (address):** local em que a atividade será realizada ou veiculada.
  - **Tipo de evento (event_type_id):** uma classificação associada ao evento, pode assumir um dos seguintes valores: `Minicurso`, `Palestra`, `Roda de Conversa` e `Outro`.
  - **Data do evento proposto (date_)**;
    - **Descrição (description):** A descrição textual da atividade pretendida pelo solicitante, em tantos detalhes quanto este crê serem necessários.
- Por vez, este registro figura entre uma lista de solicitações na página do administrador, com as quais este pode proceder a interagir com.
## Cenário de Sucesso Principal

![Opção de solicitar evento destacada no menu principal](https://raw.githubusercontent.com/3uMesma/DesenvolvimentoWeb---2024.1/main/Documenta%C3%A7%C3%A3o/Casos%20de%20uso/Images/Screenshot%20from%202024-06-05%2013-33-49.png)

**1.** Ao acessar o site, o interessado, talvez após ter conferido algumas das publicações veiculadas, se interessa por solicitar aos integrantes do AstroCariri que realizem uma atividade em sua instituição de ensino. Este então procede a clicar na opção "Solicite evento", vista no menu principal ao topo da página (em um menu colapsível nesta mesma localidade para dispositivos móveis).

![Formulário para solicitação de evento](https://raw.githubusercontent.com/3uMesma/DesenvolvimentoWeb---2024.1/main/Documenta%C3%A7%C3%A3o/Casos%20de%20uso/Images/Screenshot%20from%202024-06-05%2013-45-20.png)

**2.** O interessado é levado a um formulário em que este preenche a todas as informações pertinentes a sua proposta de atividade antes de clicar "Solicitar". Estando todas as informações preenchidas corretamente, uma confirmação de envio aparece.

![Listagem das solicitações de eventos](https://raw.githubusercontent.com/3uMesma/DesenvolvimentoWeb---2024.1/main/Documenta%C3%A7%C3%A3o/Casos%20de%20uso/Images/Screenshot%20from%202024-06-05%2015-09-58.png)

**3.** Na área dos administradores o evento em questão figura entre uma lista de solicitações com as quais os integrantes do coletivo AstroCariri podem interagir.

