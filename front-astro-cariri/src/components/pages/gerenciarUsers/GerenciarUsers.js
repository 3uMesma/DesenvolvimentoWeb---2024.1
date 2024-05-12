import './GerenciarUsers.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header-admin/Navbar.js';
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import deleteIcon from '../../../images/Delete.png';
import polygon1_forward from '../../../images/polygon1.png'
import polygon1_backward from '../../../images/polygon1_upwards.png'

import React, { useState, useEffect } from 'react';
import users from "../../data/users.json";

function GerenciarUsers(){
    // const user = users[0];
    const usersPerPage = 10; // Usuários por página
    const [startIndex, setStartIndex] = useState(0); 

    const nextPage = () => {
        const nextIndex = startIndex + usersPerPage;
        if (nextIndex < users.length) {
            setStartIndex(nextIndex);
        }
    };

    const prevPage = () => {
        const prevIndex = startIndex - usersPerPage;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
        }
    };

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
    return(
        <div className='gerenciar-users'>
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <h1 className='gerenciarUsers-title'>GERENCIAR USUÁRIOS</h1>
            <div className='gerenciarUsers-list'>
                <ul>
                    <li><div className='gerenciarUsers-item-titulo'>Lista de Usuários</div></li>
                    {users.slice(startIndex, startIndex + usersPerPage).map((user, index) => (
                        <li key={index}>
                            <div className='gerenciarUsers-item'>
                                <p className='gerenciarUsers-item-userName'>{user.nome}</p>
                                <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='btn-scroll'>
                    {startIndex > 0 && <button onClick={prevPage}><img src={polygon1_backward}/></button>}
                    {(startIndex + usersPerPage) < users.length && <button onClick={nextPage}><img src={polygon1_forward}/></button>}
                </div>
            </div>
        </div>
    )
}

export default GerenciarUsers;