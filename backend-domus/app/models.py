from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database import Base


class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    senha = Column(String, nullable=False)


class Imovel(Base):
    __tablename__ = "imoveis"

    id = Column(Integer, primary_key=True, index=True)
    tipo = Column(String)
    bairro = Column(String)
    endereco = Column(String)
    descricao = Column(String)
    preco = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    imagem = Column(String)
    contato = Column(String)


class Favorito(Base):
    __tablename__ = "favoritos"

    id = Column(Integer, primary_key=True, index=True)
    usuario_id = Column(Integer, ForeignKey("usuarios.id"))
    imovel_id = Column(Integer, ForeignKey("imoveis.id"))
