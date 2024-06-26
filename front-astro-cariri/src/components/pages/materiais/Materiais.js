import "./Materiais.css";
import GlobalStyle from "../../../styles/GlobalStyle.js";
import Header from "../../layout/header/Navbar.js";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { fakeMateriais } from "../../data/materiais.jsx";

import { getAllMateriaisApi } from "../../../back-api/materiais/getAll.js";

/*
Retorna o código HTML da página que contém os materiais disponíveis no site. 
Os títulos de cada um são listados em ordem de inclusão no site.
Usa os dados dos materiais contidos no arquivo "materiais.jsx", da pasta data.
*/
function Materiais() {
  const materialsPerPage = 10; // Materiais por página
  const [startIndex, setStartIndex] = useState(0);
  const [materiais, setMateriais] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const fetchMateriais = async () => {
    try {
      const response = await getAllMateriaisApi();
      setMateriais(response);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  useEffect(() => {
    fetchMateriais();
  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...materiais));

  function search(materiais) {
    return materiais.filter((materiais) =>
      search_parameters.some((param) =>
        materiais[param].toString().toLowerCase().includes(query)
      )
    );
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
    <div className="materiais">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="body">
        <h1 className="materiais-title">MATERIAIS</h1>
        <div className="materiais-list">
          <div className="input-box">
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                  onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
                placeholder="Pesquise um material"
            />
          </div>
          <ul>
            {search(materiais).map((material) => (
              <li key={material.material_id}>
                <div className="materiais-item">
                  <Link to={`/conteudo-materiais/${material.material_id}`}>
                    {material.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Materiais;
