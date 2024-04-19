import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';

function Materiais(){
    return(
        <div className='materiais'>
            <GlobalStyle/>
            <Header/>
            <div className='body'>
                <h1 className='materiais-title'>MATERIAIS</h1>
                <div className='materiais-list'>
                    <ul>
                        <li><div className='materiais-item'>Introdução</div></li>
                        <li><div className='materiais-item'>Material 1</div></li>
                        <li><div className='materiais-item'>Material 2</div></li>
                        <li><div className='materiais-item'>Material 3</div></li>
                        <li><div className='materiais-item'>Material 4</div></li>
                        <li><div className='materiais-item'>Material 5</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Materiais;