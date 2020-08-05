import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import Page404 from './pages/Page404';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



//file que inicializa o react
//renderiza o react dentro do conteiner root.
// nosso APP esta inserido ali :)
ReactDOM.render(
  <BrowserRouter>
    {/*Componente de rotas*/}
    <Switch>
      {/*podemos usar o exact a rota o path tem que ser exato para podermos acessar.*/}
      <Route path="/" component={Home} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route>
      {/* Se não encontrar a rota cai na ultima*/}
      <Route component={Page404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
