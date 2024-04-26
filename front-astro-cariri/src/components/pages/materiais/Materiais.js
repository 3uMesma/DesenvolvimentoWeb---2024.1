import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fakeMateriais } from "../../data/materiais.jsx"

function Materiais(){
    return(
        <div className='materiais'>
            <GlobalStyle/>
            <Header/>
            <div className='body'>
                <h1 className='materiais-title'>MATERIAIS</h1>
                <div className='materiais-list'>
                    <ul>
                        {fakeMateriais.map((material, index) => (
                        <li key={index}><div className='materiais-item'>
                            <Link to='/conteudo-materiais'>{material.nome}</Link></div></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Materiais;