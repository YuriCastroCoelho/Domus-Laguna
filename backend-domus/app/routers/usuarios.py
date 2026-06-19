from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app import crud, schemas

router = APIRouter(
    prefix="/usuarios",
    tags=["Usuarios"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/cadastro")
def cadastrar(
    usuario: schemas.UsuarioCreate,
    db: Session = Depends(get_db)
):

    existe = crud.buscar_usuario_email(
        db,
        usuario.email
    )

    if existe:
        raise HTTPException(
            status_code=400,
            detail="Email já cadastrado"
        )

    novo = crud.criar_usuario(
        db,
        usuario.nome,
        usuario.email,
        usuario.senha
    )

    return {
        "mensagem": "Usuário criado",
        "id": novo.id
    }


@router.post("/login")
def login(
    dados: schemas.UsuarioLogin,
    db: Session = Depends(get_db)
):

    usuario = crud.buscar_usuario_email(
        db,
        dados.email
    )

    if not usuario:
        raise HTTPException(
            status_code=401,
            detail="Usuário não encontrado"
        )

    if usuario.senha != dados.senha:
        raise HTTPException(
            status_code=401,
            detail="Senha incorreta"
        )

    return {
        "mensagem": "Login realizado",
        "usuario": usuario.nome
    }
