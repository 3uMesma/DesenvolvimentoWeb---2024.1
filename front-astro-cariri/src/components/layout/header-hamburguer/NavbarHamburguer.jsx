import React, {useState} from "react";
import { Link } from "react-router-dom";

import { Container } from "./NavbarHamburguer";

import MenuImage from "../../../images/menu.png";
import astrocariri_logo from '../../../images/astrocariri-logo.png'
import user_logo from '../../../images/user-logo.png'
import aumenta_fonte_icon from '../../../images/aumenta-fonte.png'
import diminui_fonte_icon from '../../../images/diminui-fonte.png'
import contraste_icon from '../../../images/contraste.png'
import solicitar from '../../../images/solicitar.png'
import materiais from '../../../images/material.png'
import login from '../../../images/login.png'

import userLogoLoggedOut from '../../../images/user-logo.png';
import userLogoLoggedIn from '../../../images/user-logo-logado.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px
    const [theme, setTheme] = useState('white');

    // Função para aumentar a fonte
    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 2); // Aumenta o tamanho da fonte em 2px
    };

    // Função para diminuir a fonte
    const decreaseFontSize = () => {
        setFontSize(prevFontSize => Math.max(prevFontSize - 2, 10)); // Garante que a fonte não fique menor que 10px
    };

    // Função para aumentar o contraste
    const darkMode = () => {
        setTheme(prevTheme => {
            if(prevTheme === 'white'){
                return 'dark';
            }
            else{
                return 'white';
            }
        }); // Garante que a fonte não fique menor que 10px
    };
    
    // Aplica o tamanho da fonte à página inteira
    document.body.style.fontSize = `${fontSize}px`;
    if(theme === 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
        <div className="navbar">
            <div className="navbar-elements">
                <button onClick={toggleMenu} className="btn-menu">
                    <img className="btn-menu" src={MenuImage}/>
                </button>
                <div className="navbar-left">
                    <Link to="/" className="navbar-link">
                        <img src={astrocariri_logo} alt="astrocariri logo" className="navbar-icon-main"></img>
                    </Link>
                    <Link to="/" className="navbar-link">
                        <div className='navbar-title-accepted'>ASTROCARIRI</div>
                    </Link>
                </div>
                <div>
                    {isLoggedIn && (
                        <Link to="/user" className="navbar-text-username">Letícia Vieira</Link>
                    )}
                    <Link to="/user">
                        <img src={isLoggedIn ? userLogoLoggedIn : userLogoLoggedOut} alt="user logo" className="navbar-icon-user" />
                    </Link>
                </div>
            </div>
        </div>
            <div className='second-navbar' id='second-navbar-hamburguer' style={{backgroundColor: isOpen ? '#A384BC' : 'transparent'}}>
                <div className="navbar-acessibility">
                    <div className='acessibility-fonts'>
                        <button onClick={increaseFontSize}>
                            <img className='icon-acessibility' src={aumenta_fonte_icon} 
                            alt='ícone da ferramenta para aumento do tamanho da fonte'/>
                        </button>
                        <button onClick={decreaseFontSize}>
                            <img className='icon-acessibility' src={diminui_fonte_icon} 
                            alt='ícone da ferramenta para diminuição do tamanho da fonte'/>
                        </button>
                    </div>
                    <button onClick={darkMode}>
                        <img className='icon-acessibility' src={contraste_icon} 
                        alt='ícone da ferramenta para aumento de contraste nas pages'></img>
                    </button>
                </div>
        </div>
        <div className="drop-down">
                {isOpen && (
                    <ul className="lista-menu">
                        <a href="/materiais">
                            <li className="li-item-hamburguer">
                                <img src={materiais} className="img-item-hamburguer"/>
                                <p className="lista-title-hamburguer">Materiais</p>
                            </li>
                        </a>
                        <a href="/solicitacao-evento">
                            <li className="li-item-hamburguer">
                                <img src={solicitar} className="img-item-hamburguer"/>
                                <p className="lista-title-hamburguer">Solicite Evento</p>
                            </li>
                        </a>
                        <a href="/login">
                            <li className="li-item-hamburguer">
                                <img src={login} className="img-item-hamburguer"/>
                                <p className="lista-title-hamburguer">Login</p>
                            </li>
                        </a>
                    </ul>
                )}
            </div>
    </Container>
  );
};

export default HamburgerMenu;
