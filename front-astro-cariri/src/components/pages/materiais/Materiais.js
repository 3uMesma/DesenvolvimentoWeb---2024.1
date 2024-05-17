import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';
import Footer from '../../layout/footer/Footer.js';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import { fakeMateriais } from "../../data/materiais.jsx"

/*
Retorna o código HTML da página que contém os materiais disponíveis no site. 
Os títulos de cada um são listados em ordem de inclusão no site.
Usa os dados dos materiais contidos no arquivo "materiais.jsx", da pasta data.
*/
function Materiais(){
    const materialsPerPage = 10; // Materiais por página
    const [startIndex, setStartIndex] = useState(0); 

    const nextPage = () => {
        const nextIndex = startIndex + materialsPerPage;
        if (nextIndex < fakeMateriais.length) {
            setStartIndex(nextIndex);
        }
    };

    const prevPage = () => {
        const prevIndex = startIndex - materialsPerPage;
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
            <Footer/>
        </div>
    )
}

export default Materiais;