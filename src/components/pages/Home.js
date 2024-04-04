import './Home.css'
import background from '../../images/astrocariri-home-background.png'

function Home(){
    return(
        <div className='home'>
            <div className='home-main'>
                <h1 className='home-main-title'>“Somos feitos de poeira de estrelas. Nós somos uma maneira de o cosmos se autoconhecer.” - Carl Sagan</h1>
            </div>
            <div className='home-about'>
                <div className='home-about-left'>
                    <h1>Quem Somos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eu nunc sit amet commodo. Proin at augue eget odio elementum fringilla sed at tortor. Phasellus in diam et massa interdum porta sed a neque. Fusce vel nibh sollicitudin, tincidunt nibh vel, accumsan velit. Morbi eleifend sapien non odio ullamcorper accumsan. Nullam gravida orci ac nisl consectetur, eu accumsan tellus lacinia. Proin fermentum leo lectus, sed consequat nisl tincidunt vitae. </p>
                </div>
                <div className='home-about-right'>

                </div>
            </div>
        </div>
    )
}

export default Home;