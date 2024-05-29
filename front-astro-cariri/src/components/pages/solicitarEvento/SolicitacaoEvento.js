import "./SolicitacaoEvento.css"
import Header from "../../layout/header/Navbar";
import Footer from '../../layout/footer/Footer.js'
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

    const [date, setDate] = useState('');

    const handleDateChange = (event) => {
        let input = event.target.value;
        
        // Remove caracteres que não são números
        input = input.replace(/\D/g, '');
        
        // Insere a barra de separação após o dia e mês
        if (input.length > 2 && input.length <= 4) {
        input = input.replace(/^(\d{2})(\d{2})/, '$1/$2');
        }
        
        // Insere a barra de separação após o mês
        if (input.length > 4) {
        input = input.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
        }
        
        setDate(input);
    };

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
                
                {/**Formulário para a solicitação de um novo evento */}
                <div className="solicitarEvento-form">
                    <form>
                        {/**Dados do evento e do interessado */}
                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Título da Proposta</p>
                        <input name="titulo" className="input" type="text" placeholder="Título do evento que você propõe"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Nome do Interessado</p>
                        <input name="interessado" className="input" type="text" placeholder="Nome e Sobrenome"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Forma de Contato</p>
                        <input name="contato" className="input" type="text" placeholder="email ou celular"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Instituição do Interessado</p>
                        <input name="instituicao" className="input" type="text" placeholder="Nome completo da sua instituição"></input>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Endereço da Instituição</p>
                        <input name="endereco" className="input" type="text" placeholder="Rua, número, bairro e cidade"></input>
                        </div>

                        {/**Select para indicar o tipo do evento */}
                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Tipo de Evento</p> 
                        <select name="tipo" className="input" role="listbox">
                            <option aria-selected={true} selected>Minicurso</option>
                            <option aria-selected={false}>Palestra</option>
                            <option aria-selected={false}>Roda de Conversa</option>
                            <option aria-selected={false}>Outro</option>
                        </select>
                        </div>

                        <div className="solicitarEvento-form-entry">
                        <p className="title-input">Data do evento proposto</p>
                        <input name="data" className="input" type="text" placeholder="DD/MM/AAAA" maxLength="10" value={date} onChange={handleDateChange}></input>
                        </div>

                        {/**Campo de descrição do evento e tratamento da textarea */}
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

                    {/**Botão de submissão do forms */}
                    <div className="btn-area-solicitar">
                        <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Solicitar</button>
                    </div>
                </div>
            </div>
            <p>    </p>
            <Footer/>
        </div>
    )
}

export default SolicitacaoEventos;