import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServico) => {
      if (respostaDoServico.ok) {
        const resposta = await respostaDoServico.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados.');
    });
}

export default {
  create,
};
