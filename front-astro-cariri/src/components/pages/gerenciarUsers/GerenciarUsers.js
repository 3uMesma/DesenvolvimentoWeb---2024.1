import './GerenciarUsers.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';
import deleteIcon from '../../../images/Delete.png';
import polygon1_forward from '../../../images/polygon1.png'
import polygon1_backward from '../../../images/polygon1_upwards.png'

import React, { useState } from 'react';
import users from "../../data/users.json";

function GerenciarUsers(){
    // const user = users[0];
    const usersPerPage = 5; // Number of users to display per page
    const [startIndex, setStartIndex] = useState(0); // Index of the first user to display

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
    return(
        <div className='gerenciar-users'>
            <GlobalStyle/>
            <Header/>
            <h1 className='gerenciarUsers-title'>Gerenciar Usuários</h1>
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