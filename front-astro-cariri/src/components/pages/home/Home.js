import './Home.css'
import Header from '../../layout/header/Navbar.js'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import { fakeHome } from '../../data/home.jsx';

function Home(props){
    const home = fakeHome[0];

    return(
        <div className='home'>
            <GlobalStyle/>
            <div className='header-style-home'>
                <Header/>
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
                    <img src={home.imagem_descricao} alt="astronaut" className="home-about-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;