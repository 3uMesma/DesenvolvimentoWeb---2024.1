# Documento de requisitos do sistema AstroCariri
> 22 de março de 2024

## Público-alvo
Professores e alunos de ensino fundamental e médio em escolas públicas do Cariri, Ceará.
##  Escopo e perspectiva para o produto
Site para contato do público geral com o clube de Astronomia. Abarca:
- Divulgação de atividades
- Distribuição de material didático gratuito
- Solicitação e agendamento de cursos
- e emissão de certificados de participação
## Características dos usuários

**Estudantes:** Buscam no site a divulgação de atividades nas quais possam participar, e fazer uso dos materiais didáticos.

**Integrantes do clube:** Gerenciam os conteúdos e funcionalidades disponíveis pelo site, atuando como seus **administradores**.

**Professores ou administradores escolares:** Buscam solicitar a realização de cursos em espaços que dispõem.
## Requisitos, funcionais ou não
**Usuários** em geral necessitam ser capazes de:
- **RF00:** Ajustar a interface do site para fins de acessibilidade
    - ao tornar interface de cor branca sobre preto, ativar a leitura de libras, aumentar o contraste
- **RF01:** Listar e buscar publicações do clube, dentre as quais materiais de divulgação e didáticos .
- **RF02:** Filtrar a busca por título e tópico de interesse.
- **RF03:** Visualizar uma publicação selecionada.
- **RF04:** Realizar o Download de um material didático associado.
- **RF05:** Visualizar a disponibilidade do grupo para realização de atividades
- **RF06:** Solicitar a realização de atividades, provendo as informações necessárias
**Administradores** necessitam ser capazes de:
- **RF07:** conceder acesso a novos administradores.
- **RF08:** Realizar publicações com material para download associado.
- **RF09:** Alterar disponibilidade para a realização de atividades.
- **RF10:** Atender solicitações de realização de atividades.
- **RF11:** Alocar integrantes ou materiais para a realização das atividades (?)
## e os Requisitos lógicos do Banco de Dados

- Pertinentes às **publicações**:
    - string Título
    - date data
    - string autor
    - text descrição
    - file anexo
- Pertinentes às **atividades**:
    - string Nome
    - text descrição
    - string[] equipamentos
- Pertinentes aos **solicitantes das atividades**:
    - string solicitante
    - string endereço
    - string telefone
    - string email
- Pertinentes aos **participantes em atividades**:
    - string Nome
    - string ID
- Pertinentes aos **agendamentos:**
    - activity Atividade
    - date início
    - date término
    - string palestrante
    - Requester solicitante
    - Participant[] participante

