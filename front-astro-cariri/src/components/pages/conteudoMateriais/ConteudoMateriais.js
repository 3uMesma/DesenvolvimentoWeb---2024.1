import './ConteudoMateriais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar';
import foto from '../../../images/astrocariri-home-background.png';

function conteudoMateriais(){
    return(
        <div className='conteudoMateriais'>
            <GlobalStyle/>
            <Header/>
            <div className='body'>
                <h1 className='conteudoMateriais-title'></h1>
                <div className='conteudoMateriais-list'>
                    <h1 className='conteudoMateriais-title'>ASTRONOMIA</h1>
                    <ul>
                        <div className='conteudoMateriais-conteudo'>
                        <ul>
                        <p className='conteudoMateriais-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eu nunc sit amet commodo. Proin at augue eget odio elementum fringilla sed at tortor. Phasellus in diam et massa interdum porta sed a neque. Fusce vel nibh sollicitudin, tincidunt nibh vel, accumsan velit. Morbi eleifend sapien non odio ullamcorper accumsan. Nullam gravida orci ac nisl consectetur, eu accumsan tellus lacinia. Proin fermentum leo lectus, sed consequat nisl tincidunt vitae. </p>
                        <br></br>
                        <figure><img src={foto} className="conteudoMateriais-image"></img></figure>
                        <br></br>
                        </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default conteudoMateriais;