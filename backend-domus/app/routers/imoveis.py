from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app import schemas, crud

router = APIRouter(
    prefix="/imoveis",
    tags=["Imoveis"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def listar(db: Session = Depends(get_db)):
    return crud.listar_imoveis(db)


@router.get("/{id}")
def buscar(id: int, db: Session = Depends(get_db)):
    return crud.buscar_imovel(db, id)


@router.post("/")
def criar(
    imovel: schemas.ImovelCreate,
    db: Session = Depends(get_db)
):
    return crud.criar_imovel(db, imovel)


@router.delete("/{id}")
def deletar(
    id: int,
    db: Session = Depends(get_db)
):
    return crud.deletar_imovel(db, id)
