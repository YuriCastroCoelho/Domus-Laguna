from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuração do CORS
origens_permitidas = [
    "http://localhost:3000", # Porta padrão do React
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origens_permitidas,
    allow_credentials=True,
    allow_methods=["*"], # Permite todos os métodos (GET, POST, PUT, DELETE)
    allow_headers=["*"], # Permite todos os headers
)

# ... resto do seu código (inclusão dos routers, etc)