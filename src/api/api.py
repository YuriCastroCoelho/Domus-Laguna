BASE_URL = "https://domus-laguna.onrender.com"


# =========================
# IMÓVEIS
# =========================

def get_imoveis():
    response = fetch(f"{BASE_URL}/imoveis")
    return response.json()


def get_imovel_by_id(imovel_id):
    response = fetch(f"{BASE_URL}/imoveis/{imovel_id}")
    return response.json()


def create_imovel(dados):
    response = fetch(f"{BASE_URL}/imoveis", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(dados)
    })
    return response.json()


# =========================
# USUÁRIOS
# =========================

def login_usuario(email, senha):
    response = fetch(f"{BASE_URL}/usuarios/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "email": email,
            "senha": senha
        })
    })
    return response.json()


# =========================
# FAVORITOS
# =========================

def get_favoritos(usuario_id):
    response = fetch(f"{BASE_URL}/favoritos/{usuario_id}")
    return response.json()
