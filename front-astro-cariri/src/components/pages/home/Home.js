import './Home.css'
import Header from '../../layout/header/Navbar.js'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import gato_logo from '../../../images/astronaut-image.jpg';

function Home(){
    return(
        <div className='home'>
            <GlobalStyle/>
            <div className='header-style'>
                <Header/>
            </div>
            <div className='home-main'>
                <h1 className='home-main-title'>“Somos feitos de poeira de estrelas. Nós somos uma maneira de o cosmos se autoconhecer.” - Carl Sagan</h1>
            </div>
            <div className='home-about'>
                <div className='home-about-left'>
                    <h1 className='home-about-title'>Quem Somos?</h1>
                    <p className='home-about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eu nunc sit amet commodo. Proin at augue eget odio elementum fringilla sed at tortor. Phasellus in diam et massa interdum porta sed a neque. Fusce vel nibh sollicitudin, tincidunt nibh vel, accumsan velit. Morbi eleifend sapien non odio ullamcorper accumsan. Nullam gravida orci ac nisl consectetur, eu accumsan tellus lacinia. Proin fermentum leo lectus, sed consequat nisl tincidunt vitae. </p>
                </div>
                <div className='home-about-right'>
                    <img src={gato_logo} alt="astronaut" className="home-about-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;