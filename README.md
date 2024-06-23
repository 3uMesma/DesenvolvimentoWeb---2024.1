[#](#.md) DesenvolvimentoWeb---2024.1

Repositório para a disciplina de SCC0219 - Introdução ao Desenvolvimento Web turma B.

## INTEGRANTES DO GRUPO

Amanda Kasat - 13727210

Alcino Salviano Cavalcanti - 11892963

Eduarda Fritzen Neumann - 12556973

Lucas Isao Omati - 13673090

Caio Oliveira Godinho - 12731996

## BRANCHS

main -> Branch principal, onde será colocada as partes finalizadas e testadas durante o desenvolvimento.

dev-fromt -> Branch relacionada a etapa de desenvolvimento do front-end

dev-back -> Branch ralacionada a etapa de desenvolvimento do back-end

## Como rodar o projeto

Para que o site funcione corretamente primeiro é necessário instalar todas as dependências nescessárias com o comando `npm i`. Em seguida é necessário atualizar o .env com seus dados, está disponibilizado um exemplo de como deve estar o .env no arquivo `back-astro-cariri/.example.env`.

Para que as funções do back operem corretamente é necessário que os arquivos `back-astro-cariri/src/database/initialize.sql` e `back-astro-cariri/src/database/population.sql` sejam copiados para um SGBD da sua escolha e compilados, para que as tabelas estejam disponíveis de forma local.

Por último, é necessário abrir dois terminais, um para rodar o back e outro o front. No primeiro terminal você vai acessar a pasta `back-astro-cariri`e usar o comando `npm run dev`, após isso o back deverá estará rodando na porta 3333. No segundo terminal você vai acessar a pasta `front-astro-cariri` e usar o comando `npm run start`, após isso o front deverá estará rodando na porta 3000.

**Observação:** Para conseguir fazer login pode ser usado qualquer um dos usuários na tabela user\_, um exemplo é o usuário: `Amanda`, cuja senha é `10000000`

## Formatar código

Antes de realizar um commit, rode o comando "npm run pretty" para formatar todos os arquivos.
