import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServico) => {
      if (respostaDoServico.ok) {
        const resposta = await respostaDoServico.json();
        return resposta;
      }

      throw new Error('Não foi possível obter os dados.');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServico) => {
      if (respostaDoServico.ok) {
        const resposta = await respostaDoServico.json();
        return resposta;
      }

      throw new Error('Não foi possível obter os dados.');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
