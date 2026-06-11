from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Imovel(Base):
    __tablename__ = "imoveis"

    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True)
    tipo = Column(String)
    bairro = Column(String)
    endereco = Column(String)
    descricao = Column(String)
    preco = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    imagem = Column(String)
    contato = Column(String)