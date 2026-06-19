from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine
from app.models import Base

from app.routers.imoveis import router as imoveis_router
from app.routers.usuarios import router as usuarios_router
from app.routers.favoritos import router as favoritos_router

# Cria todas as tabelas automaticamente
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Domus Laguna API",
    description="API para gerenciamento de imóveis do Domus Laguna",
    version="1.0.0"
)

# Configuração de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React local
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(imoveis_router)
app.include_router(usuarios_router)
app.include_router(favoritos_router)

# Rota inicial
@app.get("/")
def home():
    return {
        "mensagem": "API Domus Laguna funcionando!",
        "docs": "/docs"
    }

# Health Check
@app.get("/health")
def health():
    return {
        "status": "online"
    }
