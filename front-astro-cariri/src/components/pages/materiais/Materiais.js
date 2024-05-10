import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import { fakeMateriais } from "../../data/materiais.jsx"

function Materiais(){
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
        <div className='materiais'>
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
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