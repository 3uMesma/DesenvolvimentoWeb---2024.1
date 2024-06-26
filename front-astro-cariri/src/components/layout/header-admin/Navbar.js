import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import astrocariri_logo from "../../../images/astrocariri-logo.png";
import user_logo from "../../../images/user-logo-logado.png";
import aumenta_fonte_icon from "../../../images/aumenta-fonte.png";
import diminui_fonte_icon from "../../../images/diminui-fonte.png";
import contraste_icon from "../../../images/contraste.png";

import useAuth from "../../../back-api/login/useAuth";

function NavbarAdmin() {
  // Definindo o estado inicial do tamanho da fonte
  const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px
  const [theme, setTheme] = useState("white");
  const [cookies, setCookie] = useCookies(["darkmode"]);
  const location = useLocation();

  const { user } = useAuth();

  // Função para aumentar a fonte
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2); // Aumenta o tamanho da fonte em 2px
  };

  // Função para diminuir a fonte
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 10)); // Garante que a fonte não fique menor que 10px
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

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img
              src={astrocariri_logo}
              alt="astrocariri logo que é o símbolo do Cariri, com várias estrelas dentro e um anel de saturno ao redor"
              className="navbar-icon-main"
            ></img>
          </Link>
          <Link to="/" className="navbar-title">
            ASTROCARIRI
          </Link>
        </div>
        <div className="navbar-mid">
          <Link
            to="/admin/home"
            className={
              location.pathname === "/admin/home"
                ? "navbar-text-selected"
                : "navbar-text-"
            }
            aria-current={location.pathname === "/admin/home" ? "page" : null}
          >
            HOME ADMIN
          </Link>
          <div className="navbar-pipe">|</div>
          <Link
            to="/material/gerenciar"
            className={
              location.pathname === "/material/gerenciar"
                ? "navbar-text-selected"
                : "navbar-text-"
            }
            aria-current={
              location.pathname === "/material/gerenciar" ? "page" : null
            }
          >
            GERENCIAR MATERIAL
          </Link>
          <div className="navbar-pipe">|</div>
          <Link
            to="/admin/cadastrar"
            className={
              location.pathname === "/admin/cadastrar"
                ? "navbar-text-selected"
                : "navbar-text-"
            }
            aria-current={
              location.pathname === "/admin/cadastrar" ? "page" : null
            }
          >
            ADICIONAR ADMIN
          </Link>
          <div className="navbar-pipe">|</div>
          <Link
            to="/gerenciar-users"
            className={
              location.pathname === "/gerenciar-users"
                ? "navbar-text-selected"
                : "navbar-text-"
            }
            aria-current={
              location.pathname === "/gerenciar-users" ? "page" : null
            }
          >
            GERENCIAR ADMINS
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/user" className="navbar-text-username">
            {user.username}
          </Link>
          <Link to="/user">
            <img
              src={user_logo}
              alt="user logo"
              className="navbar-icon-user"
            ></img>
          </Link>
        </div>
      </div>
      <div className="second-navbar">
        <div className="navbar-acessibility">
          <div className="acessibility-fonts">
            {/* <button onClick={increaseFontSize}>
                            Aumentar Fonte
                        </button> */}
            <button onClick={increaseFontSize}>
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
          </div>
          <button onClick={darkMode}>
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

export default NavbarAdmin;
