import './HomeAdmin.css'
import Header from '../../layout/header-admin/Navbar.js'
import Footer from '../../layout/footer/Footer.js'
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from '../../../styles/GlobalStyle.js';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import eventos from "../../data/eventos.json"

function HomeAdmin(){
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
        <div className='homeAdmin'>
            <GlobalStyle/>
            <div className='header-style'>
                {windowWidth > 850 ? (
                    <Header/>
                ) : (
                    <HamburguerMenu/>
                )}
            </div>
            <div className='home-admin-body'>
                <div className="homeAdmin-title">
                    <h1 className='homeAdmin-title'>Últimos Pedidos</h1>
                </div>
                <div className=' proposals-container'>
                    <ul className='homeAdmin-proposals'>
                        {eventos.map((proposta, index) => (
                        <li key={index}>
                            <div className='homeAdmin-proposals-proposal'>
                                <Link to="/visualizar-evento">
                                    <h2 className='homeAdmin-proposal-title'>{proposta.titulo}</h2>
                                    <p className='p-proposal'><strong>Interessado: </strong> {proposta['nome-interessado']}</p>
                                    <p className='p-proposal'><strong>Instituição: </strong> {proposta.instituicao}</p>
                                    <p className='p-proposal'><strong>Data: </strong> {proposta.data}</p>
                                    <p className='p-proposal'><strong>Tipo: </strong> {proposta.tipo}</p>
                                </Link>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeAdmin;