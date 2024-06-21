DROP TABLE IF EXISTS User_ CASCADE;
CREATE TABLE User_(
    user_id    		SERIAL PRIMARY KEY,
    name_          	VARCHAR(50) NOT NULL,
    email           VARCHAR(40) NOT NULL,
    password_       VARCHAR(40) NOT NULL,
    is_active		BOOLEAN DEFAULT TRUE
);

-- tabela aux para os tipos de evento
DROP TABLE IF EXISTS EventType CASCADE;
CREATE TABLE EventType(
    type_id    		SERIAL PRIMARY KEY,
    name_			VARCHAR(40) NOT NULL
);

INSERT INTO EventType(type_id, name_)
VALUES 
(1, 'Minicurso'),
(2, 'Palestra'),
(3, 'Roda da conversa'),
(4, 'Outro');

DROP TABLE IF EXISTS Event_ CASCADE;
CREATE TABLE Event_(
    event_id    		SERIAL PRIMARY KEY,
    title          		VARCHAR(70) NOT NULL,
    requester           VARCHAR(40) NOT NULL,
    contact           	VARCHAR(50) NOT NULL,
    institution			VARCHAR(100) NOT NULL,
    address				VARCHAR(100) NOT NULL,
    event_type_id		INT NOT NULL, 
    date_				DATE NOT NULL,
    description			TEXT NOT NULL,
    FOREIGN KEY(event_type_id) REFERENCES EventType(type_id) ON UPDATE CASCADE
);

DROP TABLE IF EXISTS Material CASCADE;
CREATE TABLE Material (
    material_id SERIAL PRIMARY KEY,
    title VARCHAR(70) NOT NULL,
    date_ DATE NOT NULL,
    author_id INT,
    CONSTRAINT fk_author
        FOREIGN KEY (author_id)
        REFERENCES User_(user_id)
        ON UPDATE CASCADE
);


DROP TABLE IF EXISTS Image CASCADE;
CREATE TABLE Image(
    image_id    		SERIAL PRIMARY KEY,
    path	          	VARCHAR(150) NOT NULL,
    caption	           	TEXT,
    alt	       			TEXT NOT null
);

DROP TABLE IF EXISTS Topic CASCADE;
CREATE TABLE Topic(
	topic_id 			SERIAL PRIMARY KEY,
    title	          	VARCHAR(100) NOT NULL,
    text                VARCHAR(3000) NOT NULL
);

DROP TABLE IF EXISTS AttributeType CASCADE;
CREATE TABLE AttributeType(
	attribute_type_id   SERIAL PRIMARY KEY, 
	name_               varchar(16) NOT NULL
);

INSERT INTO AttributeType(attribute_type_id, name_)
VALUES 
(1, 'Topic'),
(2, 'Image');

/*
	Há formas de fazer com que a verificação de existência seja feita aqui, 
	assim como seria feita com o FOREIGN KEY, mas são escritas bem grandes.
	Como é uma aplicação pequena acho que vale mais de bom senso de todos 
	escreverem códigos que façam sentido, prezando pela integridade do banco
	e seus dados.
 */

DROP TABLE IF EXISTS MaterialAttribute;
CREATE TABLE MaterialAttribute(
	material_id        INT,
	attribute_id       INT NOT NULL, -- Polimorfismo (Image and Topic)
	attribute_type     iNT,
	sequence_          INT NOT NULL,
	FOREIGN KEY (material_id) REFERENCES Material(material_id)
)