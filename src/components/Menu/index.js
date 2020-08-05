import React from 'react';
import { Link } from 'react-router-dom'; //Link para utiilizacao das rotas
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink/Index';

function Menu() { // por padrão todo component tem leta maiuscula
    return (
        <header >
            <nav className="Menu" >
                <Link to="/" >
                    <img className="Logo" src={Logo} alt="GoodUnionFlix logo" />
                </Link>
                <Button as={Link} to="/cadastro/video" className="ButtonLink" >
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu; //comando utilizado para exportar o component.