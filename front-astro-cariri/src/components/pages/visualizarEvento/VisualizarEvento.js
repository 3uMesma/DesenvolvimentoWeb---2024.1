import "./VisualizarEvento.css"
import Header from "../../layout/header/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import eventos from "../../data/eventos.json"

/*
Retorna o código HTML da página que contém as informações especificas de um evento. 
Usa os dados do evento contidos no arquivo "eventos.json", da pasta data.
*/
function VisualizarEvento(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <div className="visualizarEvento">
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <div className='body'>
                <h1 className="visualizarEvento-title">VISUALIZAR EVENTO</h1>
            
                <div className="visualizarEvento-infos">
                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Título da Proposta</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["titulo"]}</div>
                    </div>
                
                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Nome do Interessado</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["nome-interessado"]}</div>
                    </div>

                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Tipo de Contato (email, celular, etc)</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["contato"]}</div>
                    </div>

                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Instituição do Interessado</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["instituicao"]}</div>
                    </div>

                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Tipo de Evento</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["tipo"]}</div>
                    </div>

                    <div className="visualizarEvento-infos-entry">
                        <p className="visualizarEvento-infos-entry-name">Descrição</p>
                        <div className="visualizarEvento-infos-entry-value">{eventos[0]["descricao"]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualizarEvento;