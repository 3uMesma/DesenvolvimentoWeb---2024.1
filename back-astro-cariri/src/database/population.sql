INSERT INTO user_ (name_, email, password_) VALUES
('Amanda', 'amanda@gmail.com', '10000000'),
('Bruna', 'bruna@gmail.com', '20000000'),
('Caio', 'caio@gmail.com', '30000000'),
('Duda', 'duda@gmail.com', '40000000'),
('Eduarda', 'eduarda@gmail.com', '50000000'),
('Felipe', 'felipe@gmail.com', '60000000'),
('Gabriel', 'gabriel@gmail.com', '70000000'),
('Henri', 'henri@gmail.com', '80000000'),
('Isabel', 'isabel@gmail.com', '90000000'),
('Joao', 'joao@gmail.com', '10000000'),
('Kiko', 'kiko@gmail.com', '11000000'),
('Lucas', 'lucas@gmail.com', '12000000'),
('Maria', 'maria@gmail.com', '13000000'),
('Natalia', 'natalia@gmail.com', '14000000'),
('Oliver', 'oliver@gmail.com', '15000000'),
('Pedro', 'pedro@gmail.com', '16000000'),
('Queijin', 'queijin@gmail.com', '17000000'),
('Rosa', 'rosa@gmail.com', '18000000'),
('Sara', 'sara@gmail.com', '19000000'),
('Teo', 'teo@gmail.com', '20000000');

INSERT INTO event_ (title, requester, contact, institution, address, event_type_id, date_, description) VALUES
('Minicurso sobre Planetas', 'Fulano', 'fulano@gmail.com', 'USP', 'São Carlos', 1, '2024-06-01', 'Venha conhecer muito sobre os planetas, seus efeitos e muito mais'),
('Palestra sobre Pesquisa de Planetas', 'Ciclana', '@ciclana', 'Unicamp', 'Campinas', 2, '2024-06-02', 'Palestra com umas das maiores pesquisadores na área de Cosmologia do Brasil'),
('Roda da conversa com Deltrana', 'Deltrana', '@deltrana', 'UFC', 'Ceará', 3, '2024-06-03', 'Roda para descobrir e aprender sobre a astronomia afora'),
('Demonstração de meteoros', 'Aristoteles', 'aristoteles@gmail.com', 'UAC', 'Praça Grega', 4, '2024-06-04', 'Demonstração de pedras antigas e meteoros descobertos na Grécia Antiga'),
('Minicurso sobre Meteoros', 'Plutão', '@plutao', 'UAG', 'Teatro Municipal', 1, '2024-06-01', 'Tudo e muito mais sobre os meteoros da paixão'),
('Palestra sobre vida extraterreste', 'ET', '@ET_Oculto', 'UFC', 'Ceará', 2, '2024-06-07', 'Descobertas e notícias sobre a vida terrestre no universo afora'),
('Roda da conversa com Maria', 'Maria', '@maria', 'UFC', 'Ceará', 3, '2024-06-01', 'Roda de conversa com a estudante do terceiro ano de engenheria astronáutica'),
('Visita ao Museu AstroCariri', 'Amanda', '@amanda', 'UFC', 'Ceará', 4, '2024-06-08', 'Visita ao museu'),
('Minicurso sobre Foguetes', 'Elon Musk', '@elonmusk', 'Tesla', 'Teatro Municipal', 1, '2024-07-01', 'Como fazemos foguetes assim como meus carros'),
('Palestra sobre treinamento de astronautas', 'Elon Musk', '@elonmusk', 'Tesla', 'Centro de treinamento 1', 2, '2024-06-02', 'Como treinamos nossos astronautas para ir ao espaço'),
('Roda da conversa com Fulano', 'Fulano', 'fulano@gmail.com', 'USP', 'São Carlos', 3, '2024-06-03', 'Roda de conversa com Fulano sobre o sistema Solar'),
('Viagem ao Museu do Ceará', 'Deltrana', '@deltrana', 'UFC', 'Ceará', 4, '2024-06-06', 'Viagem ao Museu por 2 dias'),
('Minicurso sobre Filosofia AstroGrega', 'Aristoteles', 'aristoteles@gmail.com', 'UAC', 'Praça dos Pensadores', 1, '2024-06-08', 'O universo na visão dos gregos'),
('Palestra sobre vida fora da terra', 'ET', '@ET_Oculto', 'UFC', 'Ceará', 2, '2024-06-02', 'Como os ETs vivem fora da terra em ambientes extremos'),
('Roda da conversa com Isaac Newton', 'Isaac Newton', '@newton', 'FISIC', 'Embaixo da macieira', 3, '2024-06-06', 'Como uma maça quebrou meu cerebro e me fez fisico-astronomo'),
('Visita ao lançamento de Foguetes', 'Rosa', 'rosa@gmail.com', 'USC', 'Campo aberto', 4, '2024-07-01', 'Visita a um dos maiores campos de lançamentos de foguetes do Brasil'),
('Minicurso sobre Filosofia AstroRomana', 'Julio', 'julio@gmail.com', 'Unitalia', 'Spoleton', 1, '2024-06-03', 'O universo na visão dos romanos'),
('Palestra sobre efeitos astronomicos na terra', 'Deltrana', '@Deltrana', 'UFC', 'Ceará', 2, '2024-06-05', 'Palestra com Deltrana sobre auréolas e outros grandes efeitos da astronomia em nosso cotidiano'),
('Roda da conversa com AstroCariri', 'AstroCariri', '@astrocariri', 'UFC', 'Ceará', 3, '2024-06-04', 'Roda de conversa com o grupo AstroCariri'),
('Aula OAB', 'Professor Astro', '@prof_astro', 'UFC', 'Ceará', 4, '2024-06-01', 'Aula 2 do professor Astro para OAB');

INSERT INTO material (title, date_, author_id) VALUES
('Livro AstroCariri Volume 1', '2024-05-01', 1),
('Livro AstroCariri Volume 2', '2024-05-01', 1),
('Livro AstroCariri Volume 3', '2024-05-01', 2),
('Livro AstroCariri Volume 4', '2024-05-01', 3),
('PDF Introdução aos Planetas 1', '2024-05-01', 4),
('PDF Introdução aos Planetas 2', '2024-05-01', 4),
('Video Aula Professor Astro', '2024-05-01', 5),
('Livro Astronomia Antiga Volume 1', '2024-05-01', 6),
('Livro Astronomia Antiga Volume 2', '2024-05-01', 6),
('PDF Isaac Newton e a maçã', '2024-05-01', 7);

INSERT INTO materialattribute (material_id, attribute_id, attribute_type, sequence_) VALUES
( 1, 1, 1, 1),
( 1, 2, 1, 2),
( 1, 3, 2, 3),
( 2, 4, 2, 1),
( 3, 5, 1, 1),
( 4, 6, 1, 1),
( 5, 7, 2, 1),
( 6, 8, 2, 1);

INSERT INTO image (image_id, path, caption, alt) VALUES
(3, 'imagemFoguete', 'legenda 1', 'imagem 1'),
(4, 'imagemFoguete', 'legenda 2', 'imagem 2'),
(7, 'imagemFoguete', 'legenda 3', 'imagem 3'),
(8, 'imagemFoguete', 'legenda 4', 'imagem 4');

INSERT INTO topic (topic_id, title, text) VALUES
(1, 'Astronomia Moderna', 'A astronomia moderna se caracteriza pelo uso de tecnologias avançadas, como telescópios espaciais, radiotelescópios e sondas espaciais. Ela se foca na compreensão detalhada de fenômenos cósmicos como buracos negros, exoplanetas, a matéria escura e a energia escura. Grandes colaborações internacionais e o uso de supercomputadores para simulações cosmológicas também são características marcantes dessa era da astronomia.'),
(2, 'Astronomia Antiga', 'A astronomia antiga abrange os primeiros esforços humanos para entender o cosmos. Civilizações como os babilônios, gregos, chineses e maias desenvolveram calendários, mapas estelares e teorias sobre o movimento dos corpos celestes. Muitos desses conhecimentos foram fundamentais para a navegação e a agricultura. A transição das concepções geocêntricas para heliocêntricas marcou um grande avanço na história da astronomia.'),
(5, 'Pesquisa', 'A pesquisa em astronomia envolve observações, experimentos e modelagem teórica para responder perguntas fundamentais sobre o universo. Pesquisadores utilizam uma variedade de instrumentos e técnicas para estudar objetos celestes e fenômenos astronômicos. A coleta e análise de dados, muitas vezes em colaboração internacional, são cruciais para expandir nosso entendimento do cosmos e fazer novas descobertas.'),
(6, 'Iniciação Científica', 'A iniciação científica é uma fase importante na formação de novos cientistas. Em astronomia, isso pode envolver participação em projetos de pesquisa, análise de dados astronômicos, desenvolvimento de software para simulações ou até a construção de pequenos instrumentos. Este processo proporciona experiência prática, promove o pensamento crítico e incentiva o interesse contínuo na ciência e na investigação do universo.');  