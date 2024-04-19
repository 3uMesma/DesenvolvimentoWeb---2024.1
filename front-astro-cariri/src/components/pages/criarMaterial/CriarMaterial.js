import "./CriarMaterial.css"
import Header from "../../layout/header-admin/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState } from 'react';

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

    return(
        <div className="criarMaterial">
            <GlobalStyle/>
            <Header/>
            <div className="body">
                <h1 className="criarMaterial-title">CRIAÇÃO DE MATERIAL</h1>
                <div className="criarMaterial-form">
                    <form onSubmit={handleSubmit}>
                        <div className="campo-forms">
                            <p className="title-input-criar">Título</p>
                            <input name="titulo" className="text-input-criar" type="text"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Autor</p>
                            <input name="autor" className="text-input-criar" type="text"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Tópico</p>
                            <input name="topico" className="text-input-criar" type="text"></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Texto</p> 
                            <textarea required name="texto" 
                            className="texto-input" 
                            ref={textAreaRef}
                            onChange={adjustHeight}
                            style={{ height: `${textareaHeight}px` }}></textarea>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Imagem</p> 
                            <input name="imagem" className="file-input-criar" type="file" onChange={handleFileChange}></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Legenda Imagem</p>
                            <input name="legenda" className="text-input-criar" type="text"></input>
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