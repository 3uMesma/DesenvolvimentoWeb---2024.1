import "./CriarMaterial.css";

import React, { useRef, useState, useEffect } from "react";

// Importação de componentes de layout
import Header from "../../layout/header-admin/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";

import GlobalStyle from "../../../styles/GlobalStyle";

function CriarMaterial() {
  // Referência para o textarea
  const textAreaRef = useRef(null);
  // Estado para controlar a altura do textarea
  const [textareaHeight, setTextareaHeight] = useState(52); // Altura inicial

  // Função para ajustar a altura do textarea
  function adjustHeight() {
    const { scrollHeight } = textAreaRef.current;
    const newHeight = Math.max(scrollHeight, 32); // Altura mínima
    setTextareaHeight(newHeight);
  }

  // Estado para armazenar o arquivo selecionado
  const [file, setFile] = useState(null);

  // Função para lidar com a mudança de arquivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar o arquivo para o back-end, parte futura
    console.log("Arquivo selecionado:", file);
  };

  // Estado para armazenar a largura da janela, serve para o menu hamburguer
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Efeito para atualizar a largura da janela quando ela é redimensionada
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
    <div className="criarMaterial">
      <GlobalStyle />

      {/* Foi definido 850 pq é o limite de quando o header fica legal*/}
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="body" id="body-criar">
        <h1 className="criarMaterial-title">CRIAÇÃO DE MATERIAL</h1>
        <div className="criarMaterial-form">
          {/* Formulário para criar material */}
          <form onSubmit={handleSubmit}>
            {/* Campos de título */}
            <div className="campo-forms">
              <p className="title-input-criar">Título</p>
              <input
                name="titulo"
                className="text-input-criar"
                type="text"
                placeholder="Título do Material a ser criado"
              ></input>
            </div>
            {/* Campo de autor*/}
            <div className="campo-forms">
              <p className="title-input-criar">Autor</p>
              <input
                name="autor"
                className="text-input-criar"
                type="text"
                placeholder="Autor do Material"
              ></input>
            </div>
            {/* Campo de tópico*/}
            <div className="campo-forms">
              <p className="title-input-criar">Tópico</p>
              <input
                name="topico"
                className="text-input-criar"
                type="text"
                placeholder="Tópico 1"
              ></input>
            </div>
            {/* Campo do texto*/}
            <div className="campo-forms">
              <p className="title-input-criar">Texto</p>
              <textarea
                required
                name="texto"
                className="texto-input"
                ref={textAreaRef}
                placeholder="Texto do tópico"
                onChange={adjustHeight}
                style={{ height: `${textareaHeight}px` }}
              ></textarea>
            </div>
            {/* Campo para selecionar um arquivo */}
            <div className="campo-forms">
              <p className="title-input-criar">Imagem</p>
              <input
                name="imagem"
                className="file-input-criar"
                type="file"
                onChange={handleFileChange}
              ></input>
            </div>
            {/* Campo de legenda da imagem*/}
            <div className="campo-forms">
              <p className="title-input-criar">Legenda Imagem</p>
              <input
                name="legenda"
                className="text-input-criar"
                placeholder="Leganda para a imagem"
                type="text"
              ></input>
            </div>
            {/* Botões de ação */}
            <div className="btn-add">
              <button
                type="submit"
                className="botaoAdicionar"
                name="AdicionarTopico"
              >
                Adicionar Tópico
              </button>
              <button
                type="submit"
                className="botaoAdicionar"
                name="RetirarTopico"
              >
                Retirar Tópico
              </button>
              <button
                type="submit"
                className="botaoAdicionar"
                name="AdicionarImagem"
              >
                Adicionar Imagem
              </button>
              <button
                type="submit"
                className="botaoAdicionar"
                name="RetirarImagem"
              >
                Retirar Imagem
              </button>
            </div>

            {/* Botão para submeter o formulário (ainda nn funciona por causa do back*/}
            <div className="btn-solicitar">
              <button type="submit" id="botaoSolicitar" name="SolicitarEvento">
                Submeter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// Exporta o componente CriarMaterial
export default CriarMaterial;
