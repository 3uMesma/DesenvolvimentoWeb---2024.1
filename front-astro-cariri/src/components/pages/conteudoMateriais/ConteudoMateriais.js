import "./ConteudoMateriais.css";

import React, { useState, useEffect } from "react";
import { pdf } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import GlobalStyle from "../../../styles/GlobalStyle.js";

import Header from '../../layout/header/Navbar';
import Footer from '../../layout/footer/Footer.js';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";

// Importação dos dados falsos de materiais
import { fakeMateriais } from "../../data/materiais.jsx";

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
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 50,
    fontSize: 12,
  },
  header: {
    backgroundColor: '#4D2375',
    color: '#E4E4E4',
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
    color: '#4D2375',
    fontSize: 18,
    marginTop: 70,
    fontWeight: 'bold',
    marginLeft: -5,
  },
  author: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
  },
  caption: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

function ConteudoMateriais(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const material = fakeMateriais[0];

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
    const a = document.createElement('a');
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

  return (
    <div className="conteudoMateriais" id="conteudoMateriais">
      <GlobalStyle />

      {generatingPDF ? (
        <MenuPDF />
      ) : windowWidth > 850 ? (
        <Header />
      ) : (
        <HamburguerMenu />
      )}

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
          <h1 className="conteudoMateriais-title">{material.nome}</h1>
          <h2>Escrito por: {material.autor} ✨</h2>
          <ul>
            <div className="conteudoMateriais-conteudo">
              <ul>
                <p className="conteudoMateriais-text">{material.texto}</p>
                <br></br>
                <figure>
                  <img
                    src={material.imagem_url}
                    className="conteudoMateriais-image"
                    alt="Imagem do material"
                  ></img>
                </figure>
                <br></br>
                <p className="material-legenda">{material.imagem_legenda}</p>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      {!generatingPDF && (<Footer/>)}
    </div>
  );
}

export default ConteudoMateriais;