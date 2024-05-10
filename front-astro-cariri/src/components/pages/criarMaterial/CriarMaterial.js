import "./CriarMaterial.css"
import Header from "../../layout/header-admin/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState, useEffect } from 'react';

function CriarMaterial(){
    const textAreaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState(52); // Altura inicial

    // Função para ajustar a altura do textarea
    function adjustHeight() {
        const { scrollHeight } = textAreaRef.current;
        const newHeight = Math.max(scrollHeight, 32); // Altura mínima
        setTextareaHeight(newHeight);
    }

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui enviar para o back
        console.log('Arquivo selecionado:', file);
    };

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
        <div className="criarMaterial">
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <div className="body" id="body-criar">
                <h1 className="criarMaterial-title">CRIAÇÃO DE MATERIAL</h1>
                <div className="criarMaterial-form">
                    <form onSubmit={handleSubmit}>
                        <div className="campo-forms">
                            <p className="title-input-criar">Título</p>
                            <input name="titulo" className="text-input-criar" type="text" placeholder="Título do Material a ser criado"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Autor</p>
                            <input name="autor" className="text-input-criar" type="text" placeholder="Autor do Material"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Tópico</p>
                            <input name="topico" className="text-input-criar" type="text" placeholder="Tópico 1"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Texto</p> 
                            <textarea required name="texto" 
                            className="texto-input" 
                            ref={textAreaRef}
                            placeholder="Texto do tópico"
                            onChange={adjustHeight}
                            style={{ height: `${textareaHeight}px` }}></textarea>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Imagem</p> 
                            <input name="imagem" className="file-input-criar" type="file" onChange={handleFileChange}></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Legenda Imagem</p>
                            <input name="legenda" className="text-input-criar" placeholder="Leganda para a imagem" type="text"></input>
                        </div>
                    </form>
                    <div className="btn-add">
                        <button type="submit" className="botaoAdicionar" name="AdicionarTopico">Adicionar Tópico</button>
                        <button type="submit" className="botaoAdicionar" name="RetirarTopico">Retirar Tópico</button>
                        <button type="submit" className="botaoAdicionar" name="AdicionarImagem">Adicionar Imagem</button>
                        <button type="submit" className="botaoAdicionar" name="RetirarImagem">Retirar Imagem</button>
                    </div>
                    <div className="btn-solicitar">
                        <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Submeter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CriarMaterial;