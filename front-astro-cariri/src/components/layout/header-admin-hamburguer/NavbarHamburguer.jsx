import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Container } from "./NavbarHamburguer";

import MenuImage from "../../../images/menu.png";
import astrocariri_logo from "../../../images/astrocariri-logo.png";
import user_logo from "../../../images/user-logo-logado.png";
import aumenta_fonte_icon from "../../../images/aumenta-fonte.png";
import diminui_fonte_icon from "../../../images/diminui-fonte.png";
import contraste_icon from "../../../images/contraste.png";
import add_user from "../../../images/add-user.png";
import home from "../../../images/home-admin.png";
import material from "../../../images/material.png";
import mng_user from "../../../images/manage-users.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [fontSize, setFontSize] = useState(16); // Tamanho padrão da fonte é 16px
  const [theme, setTheme] = useState("white");
  const [cookies, setCookie] = useCookies(["darkmode"]);

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
    <Container>
      <div className="navbar">
        <div className="navbar-elements">
          <button onClick={toggleMenu} className="btn-menu">
            <img className="btn-menu" src={MenuImage} />
          </button>
          <div className="navbar-left">
            <Link to="/" className="navbar-link">
              <img
                src={astrocariri_logo}
                alt="astrocariri logo que é o símbolo do Cariri, com várias estrelas dentro e um anel de saturno ao redorastrocariri logo"
                className="navbar-icon-main"
              ></img>
            </Link>
            <Link to="/" className="navbar-link">
              <div className="navbar-title-accepted">ASTROCARIRI</div>
            </Link>
          </div>
          <div>
            <Link to="/user" className="navbar-text-username">
              Letícia Vieira
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
      </div>
      <div
        className="second-navbar"
        id="second-navbar-hamburguer"
        style={{ backgroundColor: isOpen ? "#A384BC" : "transparent" }}
      >
        <div className="navbar-acessibility">
          <div className="acessibility-fonts">
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
      <div className="drop-down">
        {isOpen && (
          <ul className="lista-menu">
            <li>
              <Link to="/admin/home" aria-label="Home Admin">
                <img
                  src={home}
                  alt="Ícone da Home"
                  className="img-item-hamburguer"
                />
                <p className="lista-title-hamburguer">Home Admin</p>
              </Link>
            </li>
            <li>
              <Link to="/material/gerenciar" aria-label="Gerenciar Material">
                <img
                  src={material}
                  alt="Ícone de Gerenciar Material"
                  className="img-item-hamburguer"
                />
                <p className="lista-title-hamburguer">Gerenciar Material</p>
              </Link>
            </li>
            <li>
              <Link to="/admin/cadastrar" aria-label="Adicionar Admin">
                <img
                  src={add_user}
                  alt="Ícone de Adicionar Admin"
                  className="img-item-hamburguer"
                />
                <p className="lista-title-hamburguer">Adicionar Admin</p>
              </Link>
            </li>
            <li>
              <Link to="/gerenciar-users" aria-label="Gerenciar Admins">
                <img
                  src={mng_user}
                  alt="Ícone de Gerenciar Admins"
                  className="img-item-hamburguer"
                />
                <p className="lista-title-hamburguer">Gerenciar Admins</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </Container>
  );
};

export default HamburgerMenu;
