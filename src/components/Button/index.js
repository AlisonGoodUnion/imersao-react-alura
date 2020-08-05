import styled from 'styled-components';

// Tagged template string `` permitem utilizar expressões imbutidas.
// as Tagged são do javascript e não do react
// para utilizar o styled é necessário instalar
// styled + properties html nesse caso é button mas na tela temos um link <a>
// então no component utilizamos o parametro as="a" para alterar o tipo de componente.

// caso queira alterar o Link do button podemos
// passar ele como paramtro no styled
const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:ButtonLink:focus {
      opacity: .5;
    }
`;

export default Button;
