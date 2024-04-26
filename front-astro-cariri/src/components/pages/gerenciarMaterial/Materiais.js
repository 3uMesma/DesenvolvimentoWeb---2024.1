import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import HeaderAdmin from '../../layout/header-admin/Navbar.js';

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fakeMateriais } from "../../data/materiais.jsx"

import deleteIcon from "../../../images/Delete.png"
import editIcon from "../../../images/edit.png"
import criarIcon from "../../../images/btn-criar.png"

function GerenciaMateriais(){
    return(
        <div className='materiais'>
            <GlobalStyle/>
            <HeaderAdmin/>
            <div className='body'>
                <h1 className='materiais-title'>MATERIAIS</h1>
                <div className='materiais-list'>
                    <div className='area-btn-criar-material'>
                        <div className='btn-criar-material'>
                            <Link className='link-criar-material' to="/material/criar">
                                <p className='p-criar-gerenciar-material'>Criar Material</p>
                                <img className="icon-criar-material" src={criarIcon}/>
                            </Link>
                        </div>
                    </div>
                    <ul>
                        {fakeMateriais.map((material, index) => (
                        <li key={index}>
                            <div className='materiais-item'>
                                <Link to='/conteudo-materiais'>{material.nome}</Link>
                                <div className='btn-area-gerenciar-material'>
                                    <Link to='/material/editar' className="btn-editar-material">
                                        <img className="icon-editar-material" src={editIcon}/>
                                    </Link>
                                    <button className="btn-excluir-material">
                                        <img className="icon-excluir-material" src={deleteIcon}/>
                                    </button>
                                </div>
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