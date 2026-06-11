from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List


from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/imoveis", tags=["Imóveis"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[schemas.Imovel])
def listar_imoveis(db: Session = Depends(get_db)):
    return db.query(models.Imovel).all()