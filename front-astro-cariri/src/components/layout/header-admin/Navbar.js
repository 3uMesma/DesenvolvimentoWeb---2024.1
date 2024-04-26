import './Navbar.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import astrocariri_logo from '../../../images/astrocariri-logo.png'
import user_logo from '../../../images/user-logo.png'
import aumenta_fonte_icon from '../../../images/aumenta-fonte.png'
import diminui_fonte_icon from '../../../images/diminui-fonte.png'
import contraste_icon from '../../../images/contraste.png'


function NavbarAdmin(){
    // Definindo o estado inicial do tamanho da fonte
    const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px

    // Função para aumentar a fonte
    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 2); // Aumenta o tamanho da fonte em 2px
    };

    // Função para diminuir a fonte
    const decreaseFontSize = () => {
        setFontSize(prevFontSize => Math.max(prevFontSize - 2, 10)); // Garante que a fonte não fique menor que 10px
    };

    // Aplica o tamanho da fonte à página inteira
    document.body.style.fontSize = `${fontSize}px`;
    return(
        <div className='header'>
            <div className="navbar">
                <div className="navbar-left">
                    <img src={astrocariri_logo} alt="astrocariri logo" className="navbar-icon-main"></img>
                    <Link to="/" className="navbar-title">ASTROCARIRI</Link>
                </div>
                <div className="navbar-mid">
                    <Link to="/admin/home" className="navbar-text-">HOME ADMIN</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="/material/gerenciar" className="navbar-text-">GERENCIAR MATERIAL</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="#" className="navbar-text-">ADICIONAR ADMIN</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="#" className="navbar-text-">GERENCIAR ADMINS</Link>
                    {/* <div className='navbar-pipe'>|</div> */}
                </div>
                <div className="navbar-right">
                    <Link to="/user" className="navbar-text-username">Letícia Vieira</Link>
                    <img src={user_logo} alt="user logo" className="navbar-icon-user"></img>
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
                    <img className='icon-acessibility' src={contraste_icon} 
                    alt='ícone da ferramenta para aumento de contraste nas pages'></img>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin;