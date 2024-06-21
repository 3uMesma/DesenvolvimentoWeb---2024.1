import "./HomeAdmin.css";
import Header from "../../layout/header-admin/Navbar.js";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllEventsApi } from "../../../back-api/evento/getAll.js"

import eventos from "../../data/eventos.json";
import { propTypes } from "react-bootstrap/esm/Image.js";

function HomeAdmin() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [eventos, setEventos] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await getAllEventsApi();
      console.log(response)
      setEventos(response);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    console.log(eventos)
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if(!eventos){
    return (
      <div>Carregando...</div>
    )
  }

  return (
    <div className="homeAdmin">
      <GlobalStyle />
      <div className="header-style">
        {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      </div>
      <div className="home-admin-body">
        <div className="homeAdmin-title">
          <h1 className="homeAdmin-title">Últimos Pedidos</h1>
        </div>
        <div className=" proposals-container">
          <ul className="homeAdmin-proposals">
            {eventos.map((proposta, index) => (
              <li key={index}>
                <div className="homeAdmin-proposals-proposal">
                  <Link to={`/visualizar-evento/${proposta.event_id}`}>
                    <h2 className="homeAdmin-proposal-title">
                      {proposta.title}
                    </h2>
                    <p className="p-proposal">
                      <strong>Interessado: </strong>{" "}
                      {proposta.requester}
                    </p>
                    <p className="p-proposal">
                      <strong>Instituição: </strong> {proposta.institution}
                    </p>
                    <p className="p-proposal">
                      <strong>Data: </strong> {proposta.date_.substring(0, 10)}
                    </p>
                    <p className="p-proposal">
                      <strong>Tipo: </strong> {proposta.event_type_name}
                    </p>
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

export default HomeAdmin;
