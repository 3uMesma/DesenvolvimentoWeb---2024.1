import './ConteudoMateriais.css';
import GlobalStyle from '../../../styles/GlobalStyle.js';

import Header from '../../layout/header/Navbar';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";

import React, { useState, useEffect } from 'react';

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

    // Renderização do componente
    return (
        <div className='conteudoMateriais'>
            <GlobalStyle />

            {/* Renderiza o cabeçalho de acordo com a largura da janela */}
            {windowWidth > 850 ? (
                <Header />
            ) : (
                <HamburguerMenu />
            )}

            <div className='body'>
                <h1 className='conteudoMateriais-title'></h1>

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
        </div>
    );
}
export default ConteudoMateriais;