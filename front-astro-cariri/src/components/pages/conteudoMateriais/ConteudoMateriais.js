import './ConteudoMateriais.css';
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";
import React, { useState, useEffect } from 'react';
import { fakeMateriais } from "../../data/materiais.jsx";

function ConteudoMateriais(props) {
    const material = fakeMateriais[0];

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

    return (
        <div className='conteudoMateriais'>
            <GlobalStyle />
            {windowWidth > 850 ? (
                <Header />
            ) : (
                <HamburguerMenu />
            )}
            <div className='body'>
                <h1 className='conteudoMateriais-title'></h1>
                <div className='conteudoMateriais-list'>
                    <h1 className='conteudoMateriais-title'>{material.nome}</h1>
                    <h2>Escrito por: {material.autor} ✨</h2>
                    <ul>
                        <div className='conteudoMateriais-conteudo'>
                            <ul>
                                <p className='conteudoMateriais-text'>{material.texto}</p>
                                <br></br>
                                <figure><img src={material.imagem_url} className="conteudoMateriais-image" alt="Imagem do material"></img></figure>
                                <br></br>
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