import './Materiais.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';

import { Link } from "react-router-dom";

function Materiais(){
    return(
        <div className='materiais'>
            <GlobalStyle/>
            <Header/>
            <div className='body'>
                <h1 className='materiais-title'>MATERIAIS</h1>
                <div className='materiais-list'>
                    <ul>
                        <li><div className='materiais-item'><Link to='/conteudo-materiais'>Introdução</Link></div></li>
                        <li><div className='materiais-item'><Link to='/conteudo-materiais'>Material</Link></div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Materiais;