import './ConteudoMateriais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar';
import foto from '../../../images/img-materiais/foguete.png';

import React from 'react';
import materiais from "../../data/materiais.json";

function conteudoMateriais(props){
    const material = materiais[0];
    return(
        <div className='conteudoMateriais'>
            <GlobalStyle/>
            <Header/>
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
                        <figure><img src={material.imagem_url} className="conteudoMateriais-image"></img></figure>
                        <br></br>
                        <p className='material-legenda'>{material.imagem_legenda}</p>
                        </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default conteudoMateriais;