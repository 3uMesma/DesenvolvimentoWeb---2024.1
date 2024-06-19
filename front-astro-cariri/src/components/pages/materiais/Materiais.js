import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';
import Footer from '../../layout/footer/Footer.js'
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import { fakeMateriais } from "../../data/materiais.jsx"

import { getAllMateriaisApi } from "../../../back-api/materiais/getAll.js";

/*
Retorna o código HTML da página que contém os materiais disponíveis no site. 
Os títulos de cada um são listados em ordem de inclusão no site.
Usa os dados dos materiais contidos no arquivo "materiais.jsx", da pasta data.
*/
function Materiais(){
    const materialsPerPage = 10; // Materiais por página
    const [startIndex, setStartIndex] = useState(0); 
    const [materiais, setMateriais] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const fetchMateriais = async () => {
        try {
            const response = await getAllMateriaisApi(); 
            console.log(response);
            setMateriais(response);
        } catch (error) {
            console.error("Error fetching materials:", error);
        }
    };

    useEffect(() => {
        fetchMateriais();
    }, []);

    const nextPage = () => {
        const nextIndex = startIndex + materialsPerPage;
        if (nextIndex < materiais.length) {
            setStartIndex(nextIndex);
        }
    };

    const prevPage = () => {
        const prevIndex = startIndex - materialsPerPage;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
        }
    };

  
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
                        {materiais.map((material, index) => (
                        <li key={index}><div className='materiais-item'>
                            <Link to='/conteudo-materiais'>{material.title}</Link></div></li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Materiais;