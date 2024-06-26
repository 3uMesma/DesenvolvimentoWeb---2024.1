import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import astrocariri_logo from "../../../images/astrocariri-logo.png";

import aumenta_fonte_icon from "../../../images/aumenta-fonte.png";
import diminui_fonte_icon from "../../../images/diminui-fonte.png";
import contraste_icon from "../../../images/contraste.png";

import userLogoLoggedOut from "../../../images/user-logo.png";
import userLogoLoggedIn from "../../../images/user-logo-logado.png";

import { getUserBackApi } from "../../../back-api/user/get";

function Navbar() {
  // Definindo o estado inicial do tamanho da fonte
  const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px
  const [theme, setTheme] = useState("white");
  const [cookies, setCookie] = useCookies(["darkmode"]);
  const location = useLocation();
  const [fontChangeMessage, setFontChangeMessage] = useState(''); 
  const [username, setUsername] = useState(""); // Estado para armazenar o nome do usuário

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userId = 11;
        const userData = await getUserBackApi(userId);
        setUsername(userData.name); // Supondo que a resposta contenha o nome do usuário na propriedade 'name'
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserName();
  }, []);

  // Função para aumentar a fonte
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = Math.min(prevFontSize + 2, 22);
      setFontChangeMessage(newFontSize === prevFontSize 
        ? `A fonte já está no tamanho máximo de ${newFontSize}px` 
        : `A fonte aumentou para ${newFontSize}px`);
      return newFontSize;
    });
  };

  // Função para diminuir a fonte
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = Math.max(prevFontSize - 2, 10);
      setFontChangeMessage(newFontSize === prevFontSize 
        ? `A fonte já está no tamanho mínimo de ${newFontSize}px` 
        : `A fonte diminuiu para ${newFontSize}px`);
      return newFontSize;
    });
  };

  // Função para aumentar o contraste
  const darkMode = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "white") {
        setCookie("darkmode", "True", { path: "/" });
        return "dark";
      } else {
        setCookie("darkmode", "False", { path: "/" });
        return "white";
      }
    });
  };

  // Aplica o tamanho da fonte à página inteira
  document.body.style.fontSize = `${fontSize}px`;

  const cookieValue = cookies["darkmode"];
  if (cookieValue === "True") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <div className="navbar-header">
        <div className="navbar-left-header">
          <Link to="/" className="navbar-link">
            <img
              src={astrocariri_logo}
              alt="astrocariri logo que é o símbolo do Cariri, com várias estrelas dentro e um anel de saturno ao redor"
              className="navbar-icon-main"
            ></img>
          </Link>
          <Link to="/" className="navbar-link">
            <div className="navbar-title">ASTROCARIRI</div>
          </Link>
        </div>
        <div className="navbar-mid">
          <Link to="/materiais" className={location.pathname === "/materiais" ? "navbar-text-selected" : "navbar-text-"} aria-current={location.pathname === "/materiais" ? "page" : null}>
            MATERIAIS
          </Link>
          <div className="navbar-pipe">|</div>
          <Link to="/solicitacao-evento" className={location.pathname === "/solicitacao-evento" ? "navbar-text-selected" : "navbar-text-"} aria-current={location.pathname === "/solicitacao-evento" ? "page" : null}>
            SOLICITE EVENTO
          </Link>
          <div className="navbar-pipe">|</div>
          <Link to="/login" className={location.pathname === "/login" ? "navbar-text-selected" : "navbar-text-"} aria-current={location.pathname === "/login" ? "page" : null}>
            LOGIN
          </Link>
        </div>
        <div className="navbar-right-header">
          {isLoggedIn && (
            <Link to="/user" className="navbar-text-username">
              {username}
            </Link>
          )}
          <Link to="/user">
            <img
              src={isLoggedIn ? userLogoLoggedIn : userLogoLoggedOut}
              alt="user logo"
              className="navbar-icon-user"
            />
          </Link>
        </div>
      </div>
      <div className="second-navbar">
        <div className="navbar-acessibility">
          <div className="acessibility-fonts">
            <button onClick={increaseFontSize} >
              <img
                className="icon-acessibility"
                src={aumenta_fonte_icon}
                alt="ícone da ferramenta para aumento do tamanho da fonte"
              />
            </button>
            <button onClick={decreaseFontSize}>
              <img
                className="icon-acessibility"
                src={diminui_fonte_icon}
                alt="ícone da ferramenta para diminuição do tamanho da fonte"
              />
            </button>
            <div
              aria-live="polite"
              style={{
                position: 'absolute',
                left: '-9999px',
                height: '1px',
                width: '1px',
                overflow: 'hidden',
              }}
            >
              {fontChangeMessage}
            </div>
          </div>
          <button onClick={darkMode} aria-pressed={theme === 'dark'} aria-label={theme === 'white' ? 'Ativar modo escuro' : 'Ativar modo claro'}>
            <img
              className="icon-acessibility"
              src={contraste_icon}
              alt="ícone da ferramenta para aumento de contraste nas pages"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
