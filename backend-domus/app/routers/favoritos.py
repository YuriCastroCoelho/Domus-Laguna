CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    imovel_id INTEGER REFERENCES imoveis(id)
);