from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from . import models 


from .routers.imoveis import router as imoveis_router 

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(imoveis_router)

@app.get("/")
def read_root():
    return {"message": "API do Domus Laguna está online!"}