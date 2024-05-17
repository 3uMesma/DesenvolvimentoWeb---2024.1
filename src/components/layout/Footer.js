import "./Footer.css";
import { Link } from "react-router-dom";
import instagram_logo from "../../images/instagram-logo.png";
import gmail_logo from "../../images/gmail-logo.png";

function Navbar() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Link to="./" className="footer-title">
          ASTROCARIRI
        </Link>
      </div>
      <div className="footer-right">
        <img
          src={instagram_logo}
          alt="instagram logo"
          className="footer-icon-instagram"
        ></img>
        <img
          src={gmail_logo}
          alt="gmail logo"
          className="footer-icon-gmail"
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
