import "./EditarMaterial.css"
import Header from "../../layout/header-admin/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState, useEffect } from 'react';

import { fakeMateriais } from "../../data/materiais.jsx"

function EditarMaterial(){
    const textAreaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState(52); // Altura inicial

    // Função para ajustar a altura do textarea
    function adjustHeight() {
        const { scrollHeight } = textAreaRef.current;
        const newHeight = Math.max(scrollHeight, 32); // Altura mínima
        setTextareaHeight(newHeight);
    }

    const conteudo = fakeMateriais[0];

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
    // Essa page tem a mesma estrutura, incluso comnetários, da paga criarMaterial, com a diferença de que, nessa a gente chama
    // o material que a pessoa quer editar (por enquanto isso é mocado) com react, para que apareça na tela as informações.
    return(
        <div className="criarMaterial">
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <div className="body" id="body-criar">
                <h1 className="criarMaterial-title">EDIÇÃO DE MATERIAL</h1>
                <div className="criarMaterial-form">
                    <form onSubmit={handleSubmit}>
                        <div className="campo-forms">
                            <p className="title-input-criar">Título</p>
                            <input name="titulo" className="text-input-criar" type="text" value={conteudo.nome}></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Autor</p>
                            <input name="autor" className="text-input-criar" type="text" value={conteudo.autor}></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Tópico</p>
                            <input name="topico" className="text-input-criar" type="text" value={conteudo.topico}></input>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Texto</p> 
                            <textarea required name="texto" 
                            className="texto-input" 
                            ref={textAreaRef}
                            onChange={adjustHeight}
                            style={{ height: `${textareaHeight}px` }} value={conteudo.texto}></textarea>
                        </div>
                        <div className="campo-forms">
                            <p className="title-input-criar">Imagem</p> 
                            <input name="imagem" className="file-input-criar" type="file" onChange={handleFileChange}></input>
                        </div>
                        <p className="p-imagem-atual">Nome do arquivo de imagem atual: {conteudo.imagem_name}</p>
                        <div className="campo-forms">
                            <p className="title-input-criar">Legenda Imagem</p>
                            <input name="legenda" className="text-input-criar" type="text" value={conteudo.imagem_legenda}></input>
                        </div>
                    </form>
                    <div className="btn-add">
                        <button type="submit" className="botaoAdicionar" name="AdicionarTopico">Adicionar Tópico</button>
                        <button type="submit" className="botaoAdicionar" name="RetirarTopico">Retirar Tópico</button>
                        <button type="submit" className="botaoAdicionar" name="AdicionarImagem">Adicionar Imagem</button>
                        <button type="submit" className="botaoAdicionar" name="RetirarImagem">Retirar Imagem</button>
                    </div>
                    <div className="btn-solicitar">
                        <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditarMaterial;