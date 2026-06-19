// src/utils/favorites.js
// Gerencia favoritos tentando o backend primeiro e caindo para
// localStorage automaticamente se o endpoint ainda não existir.

import { getFavoritos, addFavorito, removeFavorito } from "./fetch";

// =========================
// CARREGAR FAVORITOS
// =========================
// Retorna array de ids dos imóveis favoritados pelo usuário.
export async function carregarFavoritos(usuario) {
  if (usuario?.id) {
    try {
      const data = await getFavoritos(usuario.id);
      // A API pode retornar lista de objetos ou lista de ids
      return Array.isArray(data)
        ? data.map((f) => (typeof f === "object" ? f.imovel_id ?? f.id : f))
        : [];
    } catch (err) {
      console.warn("Backend de favoritos indisponível, usando localStorage.", err.message);
    }
  }

  // Fallback: localStorage
  try {
    const salvo = localStorage.getItem("domus_favoritos");
    return salvo ? JSON.parse(salvo) : [];
  } catch {
    return [];
  }
}

// =========================
// VERIFICAR SE É FAVORITO
// =========================
export function isFavorito(imovelId, favoritos = []) {
  return favoritos.includes(imovelId) || favoritos.includes(String(imovelId));
}

// =========================
// ALTERNAR FAVORITO (add/remove)
// =========================
// Retorna a nova lista de ids após a operação.
export async function alternarFavorito(usuario, imovel, favoritosAtuais = []) {
  const id = imovel.id;
  const jaFavorito = isFavorito(id, favoritosAtuais);

  if (usuario?.id) {
    try {
      if (jaFavorito) {
        await removeFavorito(usuario.id, id);
      } else {
        await addFavorito(usuario.id, id);
      }
      // Atualiza a lista com base na resposta do backend
      return jaFavorito
        ? favoritosAtuais.filter((f) => f !== id && f !== String(id))
        : [...favoritosAtuais, id];
    } catch (err) {
      console.warn("Erro ao sincronizar favorito com backend, salvando localmente.", err.message);
    }
  }

  // Fallback: salva no localStorage
  const novaLista = jaFavorito
    ? favoritosAtuais.filter((f) => f !== id && f !== String(id))
    : [...favoritosAtuais, id];

  try {
    localStorage.setItem("domus_favoritos", JSON.stringify(novaLista));
  } catch {
    // ignora erros de storage
  }

  return novaLista;
}
