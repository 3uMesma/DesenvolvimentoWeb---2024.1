import "./Materiais.css";
import GlobalStyle from "../../../styles/GlobalStyle.js";
import Header from "../../layout/header-admin/Navbar.js";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";

import polygon1_forward from "../../../images/polygon1.png";
import polygon1_backward from "../../../images/polygon1_upwards.png";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { getAllMateriaisApi } from "../../../back-api/materiais/getAll.js";
import { deleteMaterialApi } from "../../../back-api/materiais/delete.js";

import deleteIcon from "../../../images/Delete.png";
import editIcon from "../../../images/edit.png";
import criarIcon from "../../../images/btn-criar.png";

function GerenciaMateriais() {
  const materialsPerPage = 10; // Materiais por página
  const [startIndex, setStartIndex] = useState(0);
  const [materiais, setMateriais] = useState([]);

  const fetchMateriais = async () => {
    try {
      const response = await getAllMateriaisApi();
      setMateriais(response);
      console.log(response)
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  useEffect(() => {
    fetchMateriais();
  }, []);

  const deleteMaterial = async (id) => {
    try {
      const response = await deleteMaterialApi(id);
    } catch (error) {
      console.error("Error deleting materials:", error);
    }
  }

  const nextPage = () => {
    const nextIndex = startIndex + materialsPerPage;
    if (nextIndex < materiais.length) {
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

  if(!materiais){
    return (
      <div>Carregando...</div>
    )
  }

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
            {materiais.slice(startIndex, startIndex+10).map((material, index) => (
              <li key={index}>
                <div className="gerenciar-materiais-item">
                  <Link to={`/conteudo-materiais/${material.material_id}`}>{material.title}</Link>
                  <div className="btn-area-gerenciar-material">
                    {/* Botao de editar material */}
                    <Link to={`/material/editar/${material.material_id}`} className="btn-editar-material">
                      <img className="icon-editar-material" src={editIcon} />
                    </Link>
                    {/* Botao de excluir material */}
                    <button className="btn-excluir-material" onClick={() => deleteMaterial(material.material_id)} >
                      <img className="icon-excluir-material" src={deleteIcon} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="btn-scroll">
            {startIndex > 0 && (
              <button onClick={prevPage}>
                <img src={polygon1_backward} />
              </button>
            )}
            {startIndex + materialsPerPage < materiais.length && (
              <button onClick={nextPage}>
                <img src={polygon1_forward} />
              </button>
            )}
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GerenciaMateriais;
