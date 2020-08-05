import React, { useState, useEffect } from 'react'; // devemos importar o useState do Rease
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#f40b0b',
  };

  // o [ ] antes do igual significa que estamos atribuindo esse retorn do useState
  // ao atributo no caso [valor, funcao].
  // entao para alterar esse nome da categoria temos que usar o setNomeCategoria.
  // o parametro inicial do state nesse caso é o 'Filmes'
  const [values, setValues] = useState(valoresIniciais); // nesse momento temos o [valor, funcao]

  console.log('[values]', values);
  // a sua função é determinada conforme o parâmetro que vc passa, nesse caso é um array.
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    // a chave pode ser nome, desc, cor.
    // passando a chave em [] ela se torna dinamica.
    setValues({
      ...values,
      [chave]: valor, // se a chave vem [nome] nome: 'valor'
    });
  }

  function handleChange(event) { // funcaoGenerica para capturar as mudanças
    // console.log('[values]', values);
    // alvo da ação que estamos fazendo, então qnd digitarmos,
    // o valor vai aparecer aqui
    // console.log('[event.target.value]', value);
    // Então para popular o valor é necessário usar o set do state;
    // setValues(event.target.value);
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

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
        {values.nome}
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
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
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
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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
