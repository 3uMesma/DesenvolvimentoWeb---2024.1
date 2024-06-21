import "./EditarMaterial.css";
import Header from "../../layout/header-admin/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fakeMateriais } from "../../data/materiais.jsx";

import { putMaterialApi } from "../../../back-api/materiais/put.js";

import { getMaterialApi } from "../../../back-api/materiais/get.js";

// Essa page tem a mesma estrutura, incluso comnetários, da paga criarMaterial, com a diferença de que, nessa a gente chama
// o material que a pessoa quer editar (por enquanto isso é mocado) com react, para que apareça na tela as informações.

function EditarMaterial() {
  const textAreaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState(52); // Altura inicial

  // Função para ajustar a altura do textarea
  function adjustHeight() {
    const { scrollHeight } = textAreaRef.current;
    const newHeight = Math.max(scrollHeight, 32); // Altura mínima
    setTextareaHeight(newHeight);
  }

  const { material_id } = useParams();
  const [materialData, setMaterialData] = useState();
  const [topics, setTopics] = useState([]);
  const [images, setImages] = useState([]);

  const fetchMaterial = async () => {
    try {
      const response = await getMaterialApi(material_id);
      setMaterialData(response.info);
      setTopics(response.topics);
      setImages(response.images);
      console.log(response);
    } catch (error) {
      console.error("Error fetching material:", error);
    }
  };

  useEffect(() => {
    fetchMaterial();
  }, [material_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  };

  const addTopic = () => {
    const newTopic = {
      topic: `Tópico ${topics.length + 1}`,
      text: `Texto ${topics.length + 1}`,
    };
    setTopics([...topics, newTopic]);
  };

  const removeTopic = () => {
    if (topics.length > 0) {
      setTopics(topics.slice(0, -1));
    }
  };

  const addImage = () => {
    const newImage = {
      file: "",
      caption: `Legenda ${images.length + 1}`,
      alt: `Descrição ${images.length + 1}`,
    };
    setImages([...images, newImage]);
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  const handleTopicChange = (e, index) => {
    if (e.target.name == "text") {
      adjustHeight();
    }

    console.log(index);
    console.log(topics);
    console.log(e.target.name);

    setTopics((topics) => {
      let updatedTopics = [...topics];
      updatedTopics[index][e.target.name] = e.target.value;
      return updatedTopics;
    });
  };

  const handleImageChange = (e, index) => {
    if (e.target.name == "file") {
      setImages((images) => {
        let updatedImages = [...images];
        updatedImages[index][e.target.name] = e.target.files[0];
        return updatedImages;
      });
    } else {
      setImages((images) => {
        let updatedImages = [...images];
        updatedImages[index][e.target.name] = e.target.value;
        return updatedImages;
      });
    }
  };

  const displayTopic = (topic, index) => {
    return (
      <div>
        <div className="campo-forms">
          <p className="title-input-criar">Tópico</p>
          <input
            name="topic"
            className="text-input-criar"
            type="text"
            value={topic.topic}
            onChange={(e) => handleTopicChange(e, index)}
          ></input>
        </div>

        <div className="campo-forms">
          <p className="title-input-criar">Texto</p>
          <textarea
            required
            name="text"
            className="texto-input"
            ref={textAreaRef}
            value={topic.text}
            onChange={(e) => handleTopicChange(e, index)}
            style={{ height: `${textareaHeight}px` }}
          ></textarea>
        </div>
      </div>
    );
  };

  const displayImage = (image, index) => {
    return (
      <div>
        {/* Campo para selecionar um arquivo de imagem*/}
        <div className="campo-forms">
          <p className="title-input-criar">Imagem</p>
          <input
            name="file"
            className="file-input-criar"
            type="file"
            value={image.file}
            onChange={(e) => handleImageChange(e, index)}
            aria-label="Selecione uma imagem"
            aria-describedby="Este é um campo de entrada de arquivo. Clique para selecionar uma imagem."
          ></input>
        </div>

        <p className="p-imagem-atual">
          Nome do arquivo de imagem atual: {images[index].file}
        </p>

        {/* Campo de legenda da imagem*/}
        <div className="campo-forms">
          <p className="title-input-criar">Legenda Imagem</p>
          <input
            name="caption"
            className="text-input-criar"
            value={image.caption}
            onChange={(e) => handleImageChange(e, index)}
            type="text"
          ></input>
        </div>
      </div>
    );
  };

  function displayElement(element, index) {
    if (element.type == 1) {
      return displayTopic(element, index);
    } else {
      displayImage(element, index);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toJSON().slice(0, 10);
    // const material = {material_id: material_id, title: materialData.title, author: materialData.author, date: date, topics: topics, images: images};
    const material = {
      material_id: material_id,
      title: materialData.title,
      author: materialData.author,
      date: date,
      topics: topics,
      images: [],
    };
    putMaterialApi(material);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!materialData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="criarMaterial">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="body" id="body-criar">
        <h1 className="criarMaterial-title">EDIÇÃO DE MATERIAL</h1>
        <div className="criarMaterial-form">
          <form onSubmit={handleSubmit}>
            <div className="campo-forms">
              <p className="title-input-criar">Título</p>
              <input
                name="title"
                className="text-input-criar"
                type="text"
                value={materialData.title}
                onChange={handleChange}
              ></input>
            </div>

            <div className="campo-forms">
              <p className="title-input-criar">Autor</p>
              <input
                name="author"
                className="text-input-criar"
                type="text"
                value={materialData.author}
                onChange={handleChange}
              ></input>
            </div>

            {topics.map((topic, index) => displayTopic(topic, index))}
          </form>

          <div className="btn-add">
            <button
              className="botaoAdicionar"
              name="AdicionarTopico"
              onClick={addTopic}
            >
              Adicionar Tópico
            </button>

            <button
              className="botaoAdicionar"
              name="RetirarTopico"
              onClick={removeTopic}
            >
              Retirar Tópico
            </button>

            {/* <button
              className="botaoAdicionar"
              name="AdicionarImagem"
              onClick={addImage}>
              Adicionar Imagem
            </button>

            <button
              className="botaoAdicionar"
              name="RetirarImagem"
              onClick={removeImage}>
              Retirar Imagem
            </button> */}
          </div>

          <div className="btn-solicitar">
            <button
              type="submit"
              id="botaoSolicitar"
              name="SolicitarEvento"
              onClick={handleSubmit}
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EditarMaterial;
