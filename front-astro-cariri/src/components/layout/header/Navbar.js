import './Navbar.css'
import { Link } from "react-router-dom";
import astrocariri_logo from '../../../images/astrocariri-logo.png'
import user_logo from '../../../images/user-logo.png'
import aumenta_fonte_icon from '../../../images/aumenta-fonte.png'
import diminui_fonte_icon from '../../../images/diminui-fonte.png'
import contraste_icon from '../../../images/contraste.png'
import libras_icon from '../../../images/libras.png'


function Navbar(){
    return(
        <div className='header'>
            <div className="navbar">
                <div className="navbar-left">
                    <img src={astrocariri_logo} alt="astrocariri logo" className="navbar-icon-main"></img>
                    <Link to="./" className="navbar-title">ASTROCARIRI</Link>
                </div>
                <div className="navbar-mid">
                    <Link to="./materiais" className="navbar-text-">MATERIAIS</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="./solicitacao-evento" className="navbar-text-">SOLICITE EVENTO</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="./login" className="navbar-text-">LOGIN</Link>
                    <div className='navbar-pipe'>|</div>
                    <Link to="./home-admin" className="navbar-text-">HOME ADMIN</Link>
                    {/* <div className='navbar-pipe'>|</div> */}
                </div>
                <div className="navbar-right">
                    <Link to="./user" className="navbar-text-username">Letícia Vieira</Link>
                    <img src={user_logo} alt="user logo" className="navbar-icon-user"></img>
                </div>
            </div>
            <div className='second-navbar'>
                <div className="navbar-acessibility">
                    <div className='acessibility-fonts'>
                        <img className='icon-acessibility' src={aumenta_fonte_icon} 
                        alt='ícone da ferramenta para aumento do tamanho da fonte'></img>
                        <img className='icon-acessibility' src={diminui_fonte_icon} 
                        alt='ícone da ferramenta para diminuição do tamanho da fonte'></img>
                    </div>
                    <img className='icon-acessibility' src={contraste_icon} 
                    alt='ícone da ferramenta para aumento de contraste nas pages'></img>
                    <img className='icon-acessibility' src={libras_icon} 
                    alt='ícone da ferramenta para suporte em libras'></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar;