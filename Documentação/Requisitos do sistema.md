# Requisitos do sistema
## Público-alvo
O uso do sistema será feito pelos moradores do Alojamento Universitário da Universidade de São Paulo (USP), Campus São Carlos, mais representantes da *Secretaria de Assistência Social e Moradia Estudantil* da referida Universidade.

## Escopo do produto
Um sistema de informação para o gerenciamento de um dos blocos do Alojamento, no caso, o Bloco E. Embora este bloco e suas demandas sejam análogas àquelas vistas em todos os demais.

## Definições
- **Aloja:** Denominação mais comumente utilizada para o Conjunto Residencial dos Estudantes Universitários (CREU);
- **Argos:** Sistema de Informação utilizado pela USP para dar encaminhamento a solicitações de manutenção diversas.
- **Autogestão:** Denominação dada a capacidade e o ente resultante da capacidade dos moradores do Aloja de decidir e gerir este último. Comumente utilizado no contexto de se frisar que dadas ações podem ser tomadas por determinação dos próprios moradores.
- **Mercúrio:** Sistema de Informação utilizado pela USP para o gerenciamento de seus almoxarifados e finanças.

## Descrição Geral
### Perspectiva do Produto

Uma aplicação web que provê acesso organizado a um banco de dados para controle de:
- Manutenção
- Limpeza
- Vagas em quartos
- Eventos organizados pelo alojamento (tais quais festas, reuniões, escalas de trabalho)

### Características gerais dos usuários a interagir com o Sistema
- **Moradores:** Estudantes da USP, que fazem do Alojamento sua moradia temporária para atender aos seus respectivos cursos.
- **Diretoria:** corpo de moradores voluntários, eleitos anualmente, os quais se responsabilizam pela gestão do Alojamento em diferentes atribuições.
    - **Diretor Geral:** Responsável por gerir a Diretoria e responsável em última instância pelas ações da ações desta da condução da gestão do alojamento.
    - **Diretores Sociais:** Responsáveis pela alocação de moradores e hóspedes nos quartos de todos os blocos do Alojamento e no sótão do Bloco E. Mediam conflitos de convivência quando solicitados.
    - **Diretores de Patrimônio (ou de Bloco):** Responsáveis pela gestão do patrimônio do alojamento, ou qual pode ou não ser de propriedade da USP, e a organização de seu respectivo Bloco.
- **Secretaria de Assistência Social e Moradia Estudantil:** Órgão da USP que, dentre outras atribuições, é responsável por intermediar a relação entre a autogestão do alojamento e os vários órgãos da USP.

## Requisitos do produto
### Funcões do Produto
- **Todos** necessitam serem capazes de:
    - **RF00:** Consultar a lista e alocação de moradores, assim como o sumário dos dados cadastrais destes.
    - **RF01:** Consultar a lista de representantes da Assistência Social e os dados de contato destes.
    - **RF02:** Consultar a lista dos participantes da atual diretoria, e seus respectivos cargos.
- **Moradores** necessitam serem capazes de:
    - **RF03:** Criar ou atualizar seus respectivos cadastros no sistema.
    - **RF03:** Fazer requerimentos (de materiais, manutenção ou limpeza).
    - **RF04:** Solicitar a troca de quarto, havendo disponibilidade.
    - **RF05:** Comunicar que irá deixar o alojamento, e quando.
- **Diretores** necessitam serem capazes de:
    - **RF06:** Gerenciar permissões de diretoria para os moradores.
    - **RF07:** Gerenciar os usuários representantes da Assistência Social.
- **Diretores de Patrimônio** necessitam ser capazes de, para seus respectivos blocos,
    - **RF08:** Revisar, e posteriormente confirmar, o envio de requerimentos.
    - **RF09:** Manter uma lista de patrimônios sob sua custódia.
    - **RF10:** Criar e agendar eventos.
    - **RF11:** Atualizar a lista de moradores ou os dados cadastrais dos mesmos.
    - **RF12:** Confirmar mudanças de quarto ou o egresso de moradores.
    - **RF13:** Acompanhar o andamento da execução dos requerimentos, fazendo novas solicitações a Assistência Social ou respondendo a solicitações por esta feitas.
    - **RF14:** Confirmar o cumprimento dos requerimentos feitos.
- **Diretores Sociais** necessitam
    - **RF15:** Aprovar novos cadastros de moradores.
    - **RF16:** Consultar o cadastro completo dos moradores.
    - **RF17:** Alocar moradores a dados quartos.
    - **RF18:** Atualizar a lista de moradores ou os dados cadastrais dos mesmos, em todos os blocos do alojamento.
- **Representantes da Assistência Social** necessitam
    - **RF19:** Confirmar ou rejeitar o recebimento de requerimentos, emitindo os códigos Argos ou Mercúrio correspondentes, ou justificativas do contrário.
    - **RF20:** Conferir a novos, ou revogar a antigos, representantes da Assistência Social acesso ao sistema.
### Não funcionais (de qualidade)
A consulta e atualização ao sistema necessita poder ser feita em desktops *e* dispositivos móveis.

### Lógicos de Banco de Dados

- Pertinente **a todos os usuários**:
    - string Nome de Exibição
    - string Nome Completo
    - string Senha (Hash)
    - string Email USP
    - int Telefone
    - enum Tipo
- Pertinente ao **patrimônio**:
    - string Categoria
    - bool Patrimoniado
    - string Número do patrimônio
    - Quarto
    - Bloco
- Requerimento
    - string Nome
    - enum Tipo
    - string código
    - text Descrição
    - enum estado
    - text[] Relatos
- Eventos
    - Gerenciados fazendo uso do Google Calendar

