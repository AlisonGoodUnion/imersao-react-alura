import React from 'react';

function ButtonLink(props) { // esse component recebe propriedades como parametro.
    // props => {classname: input do component
    // children essa properties é o conteúdo de texto entre as <> do component ButtonLink
    // resumindo o texto Novo Video
    //}
    // por padrão todo component tem leta maiuscula
    console.log(props); //podemos printar nossos parâmetros do component
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; //comando utilizado para exportar o component.