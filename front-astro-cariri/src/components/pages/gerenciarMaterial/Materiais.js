import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import HeaderAdmin from '../../layout/header-admin/Navbar.js';

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fakeMateriais } from "../../data/materiais.jsx"

import deleteIcon from "../../../images/Delete.png"

function GerenciaMateriais(){
    return(
        <div className='materiais'>
            <GlobalStyle/>
            <HeaderAdmin/>
            <div className='body'>
                <h1 className='materiais-title'>MATERIAIS</h1>
                <div className='materiais-list'>
                    <ul>
                        {fakeMateriais.map((material, index) => (
                        <li key={index}>
                            <div className='materiais-item'>
                                <Link to='/conteudo-materiais'>{material.nome}</Link>
                                <button className="btn-excluir-material"><img className="icon-excluir-material" src={deleteIcon}/></button>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GerenciaMateriais;