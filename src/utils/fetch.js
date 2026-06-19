// src/utils/fetch.js
// Cliente central de API. Toda comunicação com o backend (FastAPI no Render)
// passa por aqui — é a única fonte de verdade sobre a URL base e o
// tratamento de erros, em vez de cada página chamar axios/fetch por conta própria.

const BASE_URL = "https://domus-laguna.onrender.com";

// Wrapper genérico em torno do fetch nativo.
// - monta a URL completa
// - serializa o body em JSON automaticamente
// - lança um erro com mensagem legível quando a resposta não é "ok"
// - retorna o JSON já pronto (ou texto puro / null se não houver corpo)
async function request(path, { method = "GET", body, headers = {} } = {}) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, options);
  } catch (err) {
    // Erro de rede: backend fora do ar, sem internet, CORS bloqueado, etc.
    throw new Error(`Não foi possível conectar ao servidor (${path}). ${err.message}`);
  }

  // Tenta extrair o corpo da resposta mesmo em caso de erro,
  // pois a API normalmente manda uma mensagem útil (ex: {"detail": "..."})
  let data = null;
  const text = await response.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    const mensagem =
      (data && (data.detail || data.message)) ||
      `Erro ${response.status} ao acessar ${path}`;
    throw new Error(mensagem);
  }

  return data;
}

// =========================
// IMÓVEIS
// =========================

export function getImoveis() {
  return request("/imoveis");
}

export function getImovelById(imovelId) {
  return request(`/imoveis/${imovelId}`);
}

export function createImovel(dados) {
  return request("/imoveis", { method: "POST", body: dados });
}

// =========================
// USUÁRIOS
// =========================

export function loginUsuario(email, senha) {
  return request("/usuarios/login", {
    method: "POST",
    body: { email, senha },
  });
}

// ATENÇÃO: este endpoint de cadastro NÃO estava documentado no api.py original
// (que só tinha login_usuario). Foi assumido seguindo o mesmo padrão REST do
// restante da API. Se o backend usar outra rota/formato, ajuste só esta função
// — quem chama (pages/Register.js) já trata o caso de ela falhar.
export function registrarUsuario(dadosUsuario) {
  return request("/usuarios/cadastro", { method: "POST", body: dadosUsuario });
}


// =========================
// FAVORITOS
// =========================

export function getFavoritos(usuarioId) {
  return request(`/favoritos/${usuarioId}`);
}

// ATENÇÃO: endpoints de adicionar/remover favorito também não estavam no
// api.py original (só havia get_favoritos). Foram assumidos seguindo a mesma
// convenção REST. utils/favorites.js já trata o caso desses endpoints ainda
// não existirem no backend, caindo para localStorage automaticamente.
export function addFavorito(usuarioId, imovelId) {
  return request("/favoritos", {
    method: "POST",
    body: { usuario_id: usuarioId, imovel_id: imovelId },
  });
}

export function removeFavorito(usuarioId, imovelId) {
  return request(`/favoritos/${usuarioId}/${imovelId}`, { method: "DELETE" });
}

export { BASE_URL };
