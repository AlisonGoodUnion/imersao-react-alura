import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink/Index';

function Menu() { // por padrão todo component tem leta maiuscula
    return (
        <header >
            <nav className="Menu" >
                <a href="/" >
                    <img className="Logo" src={Logo} alt="GoodUnionFlix logo" />
                </a>
                <Button as="a" href="/" className="ButtonLink" >
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu; //comando utilizado para exportar o component.