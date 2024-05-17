import './ConteudoMateriais.css';
import GlobalStyle from '../../../styles/GlobalStyle.js';

import Header from '../../layout/header/Navbar';
import Footer from '../../layout/footer/Footer.js';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";
import MenuPDF from "../../layout/header_pdf/Navbar.js";

import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Importação dos dados falsos de materiais
import { fakeMateriais } from "../../data/materiais.jsx";

function ConteudoMateriais(props) {
    // Definição do material a ser exibido, apenas para exemplo
    const material = fakeMateriais[0];

    // Definição do estado para a largura da janela, serve para o menu hamburguer
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Efeito para atualizar a largura da janela quando ela é redimensionada
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Adiciona um listener para o evento de redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Remove o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [generatingPDF, setGeneratingPDF] = useState(false); // Declarando generatingPDF e setGeneratingPDF usando o hook useState
    function downloadPDF() {
        setGeneratingPDF(true);
    
        const input = document.getElementById('conteudoMateriais');
    
        if (input) {
            // Adicione uma classe ao elemento de conteúdo
            input.classList.add('generating-pdf');
    
            html2canvas(input, { scale: 2 })
                .then((canvas) => {
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    
                    const imgWidth = 210;
                    const imgHeight = canvas.height * imgWidth / canvas.width;
    
                    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    
                    pdf.save("material_astrocariri.pdf");
                    setGeneratingPDF(false);
                });
        } else {
            console.error('Elemento não encontrado');
            setGeneratingPDF(false);
        }  
    }   
    
    useEffect(() => {
        if (generatingPDF) {
            downloadPDF();
        }
    }, [generatingPDF]);
    
    function handleDownloadClick() {
        setGeneratingPDF(true);
    }   

    // Renderização do componente
    return (
        <div className='conteudoMateriais' id='conteudoMateriais'>
            <GlobalStyle />

            {/* Renderiza o cabeçalho apropriado com base no estado de generatingPDF, o seguinte renderiza de acordo com o tamanho da janela*/}
            {generatingPDF ? (
                <MenuPDF />
            ) : (
                windowWidth > 850 ? (
                    <Header />
                ) : (
                    <HamburguerMenu />
                )
            )}

            <div className='body'>
                <h1 className='conteudoMateriais-title'></h1>
                <div className='btn-area-download'>
                    {!generatingPDF && (
                        <button className="btn-download" onClick={handleDownloadClick}>Baixar como PDF</button>
                    )}
                </div>
                <div className='conteudoMateriais-list'>
                    {/* Título do material */}
                    <h1 className='conteudoMateriais-title'>{material.nome}</h1>
                    
                    {/* Informações sobre o autor */}
                    <h2>Escrito por: {material.autor} ✨</h2>
                    
                    {/* Conteúdo do material */}
                    <ul>
                        <div className='conteudoMateriais-conteudo'>
                            <ul>
                                {/* Texto do material */}
                                <p className='conteudoMateriais-text'>{material.texto}</p>
                                <br></br>
                                
                                {/* Imagem do material */}
                                <figure>
                                    <img src={material.imagem_url} className="conteudoMateriais-image" alt="Imagem do material"></img>
                                </figure>
                                <br></br>
                                
                                {/* Legenda da imagem */}
                                <p className='material-legenda'>{material.imagem_legenda}</p>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ConteudoMateriais;