import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header-admin/Navbar.js';
import Footer from '../../layout/footer/Footer.js';
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fakeMateriais } from "../../data/materiais.jsx";

import deleteIcon from "../../../images/Delete.png";
import editIcon from "../../../images/edit.png";
import criarIcon from "../../../images/btn-criar.png";

function GerenciaMateriais() {
  const materialsPerPage = 10; // Materiais por página
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    const nextIndex = startIndex + materialsPerPage;
    if (nextIndex < fakeMateriais.length) {
      setStartIndex(nextIndex);
    }
  };

  const prevPage = () => {
    const prevIndex = startIndex - materialsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="gerenciar-materiais">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="body">
        <h1 className="gerenciar-materiais-title">MATERIAIS</h1>

        {/* Lista dos materiais */}
        <div className="gerenciar-materiais-list">
          <div className="area-btn-criar-material">
            <div className="btn-criar-material">
              <Link className="link-criar-material" to="/material/criar">
                {/* Botao de criar material */}
                <p className="p-criar-gerenciar-material">Criar Material</p>
                <img className="icon-criar-material" src={criarIcon} />
              </Link>
            </div>
          </div>
          <ul>
            {fakeMateriais.map((material, index) => (
              <li key={index}>
                <div className="gerenciar-materiais-item">
                  <Link to="/conteudo-materiais">{material.nome}</Link>
                  <div className="btn-area-gerenciar-material">
                    {/* Botao de editar material */}
                    <Link to="/material/editar" className="btn-editar-material">
                      <img className="icon-editar-material" src={editIcon} />
                    </Link>
                    {/* Botao de excluir material */}
                    <button className="btn-excluir-material">
                      <img className="icon-excluir-material" src={deleteIcon} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default GerenciaMateriais;
