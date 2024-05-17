import "./login.css";
import Header from "../../layout/header/Navbar";
import Footer from '../../layout/footer/Footer.js';
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [hidden, setHidden] = useState(true);
  const [Password, setPassword] = useState("");

  const toggleShow = () => {
    setHidden(!hidden);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="AdminLogin">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}

      {/* Titulo do formulario */}
      <div className="AdminLogin-Main">
        <h1 className="AdminLogin-Title">LOGIN</h1>
      </div>

      {/* Formulario para login */}
      <div className="Login-form">
        <form>
          <div className="form-entry">
            <p className="name-input">Nome de Usuário</p>
            <input
              name="username"
              className="text-input2"
              placeholder="Seu nome de Usuário"
              type="text"
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Senha</p>
            <div className="password-area">
              <input
                name="current-password"
                id="password-id"
                placeholder="Sua senha"
                type={hidden ? "password" : "text"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="button" id="botao-senha" onClick={toggleShow}>
                <img src={closed_eye} id="img-botao"></img>
              </button>
            </div>
          </div>
        </form>

        {/* Botao de submissao */}
        <div className="btn-area-login">
          <button type="submit" id="fazer-login" name="fazer-login">
            <Link to="/admin/home">Fazer Login</Link>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AdminLogin;
