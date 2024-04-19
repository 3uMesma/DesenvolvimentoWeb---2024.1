import './GerenciarUsers.css'
import GlobalStyle from '../../../styles/GlobalStyle.js';
import Header from '../../layout/header/Navbar.js';
import deleteIcon from '../../../images/Delete.png';
import polygon1 from '../../../images/polygon1.png'


function GerenciarUsers(){
    return(
        <div className='gerenciar-users'>
            <GlobalStyle/>
            <Header/>
            <h1 className='gerenciarUsers-title'>Gerenciar Usuários</h1>
            <div className='gerenciarUsers-list'>
                <ul>
                    <li><div className='gerenciarUsers-item-titulo'>Lista de Usuários</div></li>
                    <li><div className='gerenciarUsers-item'>
                        <p className='gerenciarUsers-item-userName'>Usuário 1</p>
                        <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                    </div></li>
                    <li><div className='gerenciarUsers-item'>
                        <p className='gerenciarUsers-item-userName'>Usuário 2</p>
                        <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                    </div></li>
                    <li><div className='gerenciarUsers-item'>
                        <p className='gerenciarUsers-item-userName'>Usuário 3</p>
                        <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                    </div></li>
                    <li><div className='gerenciarUsers-item'>
                        <p className='gerenciarUsers-item-userName'>Usuário 4</p>
                        <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                    </div></li>
                    <li><div className='gerenciarUsers-item'>
                        <p className='gerenciarUsers-item-userName'>Usuário 5</p>
                        <img className='delete-icon' src={deleteIcon} alt='Delete Image'></img>
                    </div></li>
                </ul>
                <div className='polygon1'> <img src={polygon1} alt='Polygon1'/> </div>
            </div>
        </div>
    )
}

export default GerenciarUsers;