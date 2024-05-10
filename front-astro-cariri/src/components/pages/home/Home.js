import './Home.css'
import Header from '../../layout/header/Navbar.js'
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from '../../../styles/GlobalStyle.js';
import { fakeHome } from '../../data/home.jsx';

import React, {useState, useEffect} from 'react';

function Home(props){
    const home = fakeHome[0];

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
        <div className='home'>
            <GlobalStyle/>
            <div className='header-style-home'>
                {windowWidth > 850 ? (
                    <Header/>
                ) : (
                    <HamburguerMenu/>
                )}
            </div>
            <div className='home-main'>
                <h1 className='home-main-title'>{home.citacao}</h1>
            </div>
            <div className='home-about'>
                <div className='home-about-left'>
                    <h1 className='home-about-title'>Quem Somos?</h1>
                    <p className='home-about-description'>{home.descricao}</p>
                </div>
                <div className='home-about-right'>
                    <img src={home.imagem_descricao} alt="banner do Astrocariri, com por do sol ao fundo, algumas estrelas no céu, e cactos e outras palntas nativas do cariri no chão, símbolo do projeto Força Meninas no canto inferior direito" id="home-about-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;