import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

// este é um component APP que é inetado lá no index.js
// na pasta public temos o arquivo index.html
// gerado com nosso component root.
function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((cateogirasComVideos) => {
        setDadosIniciais(cateogirasComVideos);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // no react temos o js e nele temos o html, vai um pouco contra oq ja existe hj
    // aqui retornamos o JSX. JavaScript XML
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loaging...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Assita gameplays elevadas
             no Youtube e também na Twitch"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;
