import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriaTitulos = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []); // nunca esquecer do ,[] no effect pois entra em loop

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vido cadastrado com sucesso!');
        // history utilizado para navegação.
        // então caso tente utilizar o voltar do navegador ele provavelmente
        // vai ter a página cadastrada e podera voltar.

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        console.log(categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso!')
            history.push('/');
          });

      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriaTitulos}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>


      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
