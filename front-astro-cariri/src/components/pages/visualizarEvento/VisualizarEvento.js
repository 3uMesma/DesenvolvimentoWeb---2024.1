import "./VisualizarEvento.css";
import Header from "../../layout/header-admin/Navbar.js";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import eventos from "../../data/eventos.json";
import { getEventApi } from "../../../back-api/evento/get.js";

/*
Retorna o código HTML da página que contém as informações especificas de um evento. 
Usa os dados do evento contidos no arquivo "eventos.json", da pasta data.
*/
function VisualizarEvento() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { event_id } = useParams();
  const [eventData, setEventData] = useState();

  const fetchEvents = async () => {
    try {
      const response = await getEventApi(event_id);
      setEventData(response);
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [event_id]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!eventData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="visualizarEvento">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="body">
        <h1 className="visualizarEvento-title">VISUALIZAR EVENTO</h1>

        <div className="visualizarEvento-infos">
          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">
              Título da Proposta
            </p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.title}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">
              Nome do Interessado
            </p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.requester}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">
              Tipo de Contato (email, celular, etc)
            </p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.contact}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">
              Instituição do Interessado
            </p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.institution}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">Tipo de Evento</p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.event_type_name}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">Data</p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.date_.substring(0, 10)}
            </div>
          </div>

          <div className="visualizarEvento-infos-entry">
            <p className="visualizarEvento-infos-entry-name">Descrição</p>
            <div className="visualizarEvento-infos-entry-value">
              {eventData.description}
            </div>
          </div>
          <div className="btn-area">
            <button className="btn-aceitar">Aceitar Evento</button>
            <button className="btn-rejeitar">Rejeitar Evento</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VisualizarEvento;
