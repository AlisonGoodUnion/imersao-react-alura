import React, { useState, useEffect } from 'react'; // devemos importar o useState do Rease
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#f40b0b',
  };

  // Atribuição via desestruturação
  // destructuring assignment JS
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  console.log('[values]', values);
  // a sua função é determinada conforme o parâmetro que vc passa, nesse caso é um array.
  const [categorias, setCategorias] = useState([]);

  // usamos ele quando queremos que algum efeito colateral ocorra.
  // 1º Oq?,
  // 2º Quando? apenas quando o value.nome mudar.

  useEffect(() => {
    // Caso o ambiente seja local, obtemos a url localhost,
    // se não pegamos a quentucha.
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://goodunionflix.herokuapp.com/categorias';

    // o fetch retorna uma promise utilizamos o 1º then para transformar o response em json
    // e o segundo para exibir o objeto.
    // utilizando o await não é preciso 2 then, mas é necessário um async.
    fetch(URL)
      .then(async (respostaDoServico) => {
        const resposta = await respostaDoServico.json();
        // passando os ... criamos uma nova referencia do objeto.
        setCategorias([...resposta]);
      });

    /*     setTimeout(() => {
          setCategorias([
            ...categorias,
            {
              id: 1,
              nome: 'Youtube',
              descricao: 'Gameplays Youtube',
              cor: '#c4302b',
            },
            {
              id: 2,
              nome: 'Twitch',
              descricao: 'Gameplays Twitch',
              cor: '#6441a4',
            },
          ]);
        }, 2 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        // Criando o onSubmin no form e adicionando o preventDefault
        // não é mais realizado o reload da página toda.

        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o form né?');

        // nesse momento passamos para o state a mesma lista de categorias
        // para não apagar as categorias ja existentes usando o operador spread = espalhar :)
        // e também mais o nome da nova categoria.
        setCategorias([
          ...categorias, values,
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0
        && (
          <div>
            Loading...
          </div>
        )}

      <ul>
        {/* quando passamos o indice pra função e concatenamos na key temos diferentes
            categorias assim numca vamos ter um item repetido no aray.
        */}
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
