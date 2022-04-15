CREATE TABLE noticias (
  id integer,
  titulo text,
  descripcion text
);

CREATE TABLE productos (
  id integer,
  nombre text,
  precio double,
  descripcion text
);

ALTER TABLE productos ADD vencimiento datetime;

DROP TABLE contents;

DELETE * FROM usuarios WHERE edad > 18; 