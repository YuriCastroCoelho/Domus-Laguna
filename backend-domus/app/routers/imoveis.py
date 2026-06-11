CREATE TABLE imoveis (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(50),
    bairro VARCHAR(100),
    endereco TEXT,
    descricao TEXT,
    preco NUMERIC(12,2),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    imagem TEXT,
    contato VARCHAR(30)
);

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

import models, schemas
from database import SessionLocal

router = APIRouter(prefix="/imoveis", tags=["Imóveis"])

# Função para pegar a sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[schemas.Imovel])
def listar_imoveis(db: Session = Depends(get_db)):
    # Busca todos os imóveis no banco de dados
    imoveis = db.query(models.Imovel).all()
    return imoveis