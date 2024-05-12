import './Navbar.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import astrocariri_logo from '../../../images/astrocariri-logo.png'

import aumenta_fonte_icon from '../../../images/aumenta-fonte.png'
import diminui_fonte_icon from '../../../images/diminui-fonte.png'
import contraste_icon from '../../../images/contraste.png'

import userLogoLoggedOut from '../../../images/user-logo.png';
import userLogoLoggedIn from '../../../images/user-logo-logado.png';


function Navbar(){
    // Definindo o estado inicial do tamanho da fonte
    const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px
    const [theme, setTheme] = useState('white');

    // Função para aumentar a fonte
    const increaseFontSize = () => {
        setFontSize(prevFontSize => Math.min(prevFontSize + 2, 22)); // Aumenta o tamanho da fonte em 2px
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

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <div className='header'>
            <div className="navbar-header">
                <div className="navbar-left-header">
                    <Link to="/" className="navbar-link">
                    <img src={astrocariri_logo} alt="astrocariri logo" className="navbar-icon-main"></img>
                    </Link>
                    <Link to="/" className="navbar-link">
                    <div className='navbar-title'>ASTROCARIRI</div>
                    </Link>
                </div>
                <div className="navbar-mid">
                    <Link to="/materiais" className="navbar-text-">MATERIAIS</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="/solicitacao-evento" className="navbar-text-">SOLICITE EVENTO</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="/login" className="navbar-text-">LOGIN</Link>
                </div>
                <div className="navbar-right-header">
                    {isLoggedIn && (
                        <Link to="/user" className="navbar-text-username">Letícia Vieira</Link>
                    )}
                    <Link to="/user">
                        <img src={isLoggedIn ? userLogoLoggedIn : userLogoLoggedOut} alt="user logo" className="navbar-icon-user" />
                    </Link>
                </div>
            </div>
            <div className='second-navbar'>
                <div className="navbar-acessibility">
                    <div className='acessibility-fonts'>
                        {/* <button onClick={increaseFontSize}>
                            Aumentar Fonte
                        </button> */}
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
        </div>
    )
}

export default Navbar;