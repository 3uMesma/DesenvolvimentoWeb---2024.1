import "./SolicitacaoEvento.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState } from 'react';

function SolicitacaoEventos(){
    const textAreaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState(96); // Altura inicial

    // Função para ajustar a altura do textarea
    function adjustHeight() {
        const { scrollHeight } = textAreaRef.current;
        const newHeight = Math.max(scrollHeight, 32); // Altura mínima
        setTextareaHeight(newHeight);
    }

    return(
        <div className="solicitarEvento">
            <GlobalStyle/>
            <Header/>
            <div className="solicitarEvento-main">
                <h1>SOLICITAR EVENTO</h1>
            </div>
            <div className="solicitarEvento-form">
                <form>
                    <p className="title-input">Título da Proposta</p> <input name="titulo" className="text-input" type="text"></input>
                    <p className="title-input">Nome do Interessado</p> <input name="interessado" className="text-input" type="text"></input>
                    <p className="title-input">Tipo de Contato (email, celular, etc)</p> <input name="contato" className="text-input" type="text"></input>
                    <p className="title-input">Instituição do Interessado</p> <input name="instituicao" className="text-input" type="text"></input>
                    <p className="title-input">Tipo de Evento</p> 
                    <select name="tipo" className="select-input">
                        <option selected>Tipo 1</option>
                        <option>Tipo 2</option>
                        <option>Tipo 3</option>
                        <option>Outro</option>
                    </select>
                    <p className="title-input">Descrição</p> <textarea required name="descricao" 
                    className="descricao-input" 
                    ref={textAreaRef}
                    onChange={adjustHeight}
                    style={{ height: `${textareaHeight}px` }}
                    placeholder="Explique brevemente a proposta do evento"></textarea>
                    <br></br>
                </form>
                <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Solicitar</button>
            </div>
            <p>    </p>
        </div>
    )
}

export default SolicitacaoEventos;