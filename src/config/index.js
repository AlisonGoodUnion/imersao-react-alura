/*
* Arquivo de configuração de dominios
*/

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://goodunionflix.herokuapp.com';

export default {
  URL_BACKEND,
};
