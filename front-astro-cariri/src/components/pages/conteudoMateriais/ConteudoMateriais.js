import "./ConteudoMateriais.css";

import React, { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import GlobalStyle from "../../../styles/GlobalStyle.js";
import { useParams } from "react-router-dom";

import Header from "../../layout/header/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";

import { getMaterialApi } from "../../../back-api/materiais/get.js";

// import imagemFoguete from "../../../images/img-materiais/foguete.png";
// const images = require.context("../../../images/img-materiais/", true);

function PDFContent({ material }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}> ASTROCARIRI</Text>
          <Text style={styles.name}> {material.nome}</Text>
          <Text style={styles.author}>Escrito por: {material.autor}</Text>
          <Text>{material.texto}</Text>
          <Image style={styles.image} src={material.imagem_url} />
          <Text style={styles.caption}>{material.imagem_legenda}</Text>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 50,
    fontSize: 12,
  },
  header: {
    backgroundColor: "#4D2375",
    color: "#E4E4E4",
    fontSize: 24,
    padding: 5,
    margin: -50,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  name: {
    color: "#4D2375",
    fontSize: 18,
    marginTop: 70,
    fontWeight: "bold",
    marginLeft: -5,
  },
  author: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "auto",
    marginTop: 10,
  },
  caption: {
    marginTop: 5,
    fontStyle: "italic",
  },
});

function ConteudoMateriais(props) {
  const { material_id } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const [material, setMaterial] = useState([]);

  const fetchMateriais = async () => {
    try {
      const response = await getMaterialApi(material_id);
      setMaterial(response);
    } catch (error) {
      console.error("Error fetching material:", error);
    }
  };

  useEffect(() => {
    fetchMateriais();
  }, [material_id]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  async function downloadPDF() {
    setGeneratingPDF(true);

    const pdfContent = <PDFContent material={material} />;
    const instance = pdf(pdfContent);
    const blob = await instance.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${material.nome}.pdf`;
    document.body.appendChild(a);
    a.click();
    setGeneratingPDF(false);
  }

  function handleDownloadClick() {
    setGeneratingPDF(true);
    downloadPDF();
  }

  function displayElement(topic) {
    if (topic.type == 1) {
      return (
        <li key={topic.id}>
          <p className="conteudoMateriais-topic-title">{topic.topic}</p>
          <p className="conteudoMateriais-topic-text">{topic.text}</p>
        </li>
      );
    } else {
      // let imagePath;
      // console.log(element.path)
      // try {
      //   imagePath = images(`foguete.png`);
      // } catch (error) {
      //   console.error("Image not found:", element.image);
      //   imagePath = null; // Fallback image if not found
      // }
      // console.log(imagePath);
      // return (
      //   // <li key={element.id}>
      //   //   <figure>
      //   //     <img
      //   //       src={imagePath}
      //   //       className="conteudoMateriais-image"
      //   //       alt={element.alt}
      //   //     ></img>
      //   //   </figure>
      //   //   <br></br>
      //   //   <p className="material-legenda">{element.caption}</p>
      //   // </li>
      // )
    }
  }

  if (!material.info || !material.topics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="conteudoMateriais" id="conteudoMateriais">
      <GlobalStyle />

      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}

      <div className="body">
        <h1 className="conteudoMateriais-title"></h1>
        <div className="btn-area-download">
          {!generatingPDF && (
            <button className="btn-download" onClick={handleDownloadClick}>
              Baixar como PDF
            </button>
          )}
        </div>
        <div className="conteudoMateriais-list">
          <h1 className="conteudoMateriais-title">{material.info.title}</h1>
          <h2>Escrito por: {material.info.author} ✨</h2>
          <ul>
            <div className="conteudoMateriais-conteudo">
              <ul>{material.topics.map((topic) => displayElement(topic))}</ul>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConteudoMateriais;
