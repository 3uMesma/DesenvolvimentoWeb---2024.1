import "./Navbar.css";
import { Link } from "react-router-dom";
import astrocariri_logo from "../../images/astrocariri-logo.png";
import user_logo from "../../images/user-logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={astrocariri_logo}
          alt="astrocariri logo"
          className="navbar-icon-main"
        ></img>
        <Link to="./" className="navbar-title">
          ASTROCARIRI
        </Link>
      </div>
      <div className="navbar-mid">
        <Link to="./materiais" className="navbar-text-">
          MATERIAIS
        </Link>
        <div className="navbar-pipe">|</div>
        <Link to="./solicitacao-evento" className="navbar-text-">
          SOLICITE EVENTO
        </Link>
        <div className="navbar-pipe">|</div>
        <Link to="./login" className="navbar-text-">
          LOGIN
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="./user" className="navbar-text-username">
          Letícia Vieira
        </Link>
        <img src={user_logo} alt="user logo" className="navbar-icon-user"></img>
      </div>
    </div>
  );
}

export default Navbar;
