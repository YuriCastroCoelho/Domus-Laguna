from sqlalchemy.orm import Session
from app import models


def criar_usuario(db: Session, nome, email, senha):
    usuario = models.Usuario(
        nome=nome,
        email=email,
        senha=senha
    )

    db.add(usuario)
    db.commit()
    db.refresh(usuario)

    return usuario


def buscar_usuario_email(db: Session, email):
    return db.query(models.Usuario).filter(
        models.Usuario.email == email
    ).first()


def listar_imoveis(db: Session):
    return db.query(models.Imovel).all()


def buscar_imovel(db: Session, id):
    return db.query(models.Imovel).filter(
        models.Imovel.id == id
    ).first()


def criar_imovel(db: Session, dados):
    imovel = models.Imovel(**dados.dict())

    db.add(imovel)
    db.commit()
    db.refresh(imovel)

    return imovel


def deletar_imovel(db: Session, id):
    imovel = buscar_imovel(db, id)

    if imovel:
        db.delete(imovel)
        db.commit()

    return imovel
