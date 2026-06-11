from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

from database import Base

class Imovel(Base):
    __tablename__ = "imoveis"

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