import "./SolicitacaoEvento.css"
import Header from "../../layout/header/Navbar";
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState, useEffect } from 'react';

function SolicitacaoEventos(){
    const textAreaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState(96); // Altura inicial

    // Função para ajustar a altura do textarea
    function adjustHeight() {
        const { scrollHeight } = textAreaRef.current;
        const newHeight = Math.max(scrollHeight, 32); // Altura mínima
        setTextareaHeight(newHeight);
    }

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
        <div className="solicitarEvento">
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <div className="body">
                <h1 className="solicitarEvento-title">SOLICITAR EVENTO</h1>
                
                <div className="solicitarEvento-form">
                    <form>
                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Título da Proposta</p>
                        <input name="titulo" className="input" type="text" placeholder="Título do evento que você propõe"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Nome do Interessado</p>
                        <input name="interessado" className="input" type="text" placeholder="Nome e Sobrenome"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Tipo de Contato</p>
                        <input name="contato" className="input" type="text" placeholder="email ou celular"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Instituição do Interessado</p>
                        <input name="instituicao" className="input" type="text" placeholder="Nome completo da sua instituição"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Tipo de Evento</p> 
                        <select name="tipo" className="input">
                            <option selected>Minicurso</option>
                            <option>Palestra</option>
                            <option>Roda de Conversa</option>
                            <option>Outro</option>
                        </select>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Descrição</p>
                        <textarea required name="descricao" 
                        className="descricao-input" 
                        ref={textAreaRef}
                        onChange={adjustHeight}
                        style={{ height: `${textareaHeight}px` }}
                        placeholder="Explique brevemente a proposta do evento"></textarea>
                        </div>

                        <br></br>
                    </form>
                    <div className="btn-area-solicitar">
                        <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Solicitar</button>
                    </div>
                </div>
            </div>
            <p>    </p>
        </div>
    )
}

export default SolicitacaoEventos;