from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Favorito, Imovel
from app.schemas import FavoritoCreate


router = APIRouter(
    prefix="/favoritos",
    tags=["Favoritos"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def listar_favoritos(db: Session = Depends(get_db)):
    return db.query(Favorito).all()


@router.post("/")
def adicionar_favorito(
    favorito: FavoritoCreate,
    db: Session = Depends(get_db)
):

    imovel = db.query(Imovel).filter(
        Imovel.id == favorito.imovel_id
    ).first()

    if not imovel:
        raise HTTPException(
            status_code=404,
            detail="Imóvel não encontrado"
        )

    existe = db.query(Favorito).filter(
        Favorito.usuario_id == favorito.usuario_id,
        Favorito.imovel_id == favorito.imovel_id
    ).first()

    if existe:
        raise HTTPException(
            status_code=400,
            detail="Imóvel já favoritado"
        )

    novo = Favorito(
        usuario_id=favorito.usuario_id,
        imovel_id=favorito.imovel_id
    )

    db.add(novo)
    db.commit()
    db.refresh(novo)

    return {
        "mensagem": "Favorito adicionado",
        "id": novo.id
    }


@router.delete("/{id}")
def remover_favorito(
    id: int,
    db: Session = Depends(get_db)
):

    favorito = db.query(Favorito).filter(
        Favorito.id == id
    ).first()

    if not favorito:
        raise HTTPException(
            status_code=404,
            detail="Favorito não encontrado"
        )

    db.delete(favorito)
    db.commit()

    return {
        "mensagem": "Favorito removido"
    }
