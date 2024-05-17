import "./CadastrarAdmin.css";
import Header from "../../layout/header-admin/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useState, useEffect } from "react";

function CadastrarAdmin() {
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
    <div className="CadastrarAdmin">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}

      <div className="CadastrarAdmin-Main">
        <h1 className="CadastrarAdmin-Title">CADASTRO</h1>
      </div>

      <div className="CadastrarAdmin-form">
        <form>
          <div className="form-entry">
            <p className="name-input">Nome de Usuário</p>
            <input
              name="username"
              className="text-input2"
              placeholder="Nome do usuário a ser cadastrado"
              type="text"
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Email</p>
            <input
              name="email"
              className="text-input2"
              type="email"
              placeholder="Email do usuário a ser cadastrado. exemplo@gmail.com"
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Senha</p>
            <div className="password-area">
              <input
                name="current-password"
                placeholder="Senha do usuário a ser cadastrado"
                id="password-input1"
                type={hidden ? "password" : "text"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="button" id="botao-senha1" onClick={toggleShow}>
                <img
                  src={closed_eye}
                  id="img-botao1"
                  alt="mostrar ou esconder senha"
                ></img>
              </button>
            </div>
          </div>
        </form>
        <div className="btn-area-cadastro">
          <button type="submit" id="fazer-cadastro" name="fazer-cadastro">
            Fazer Cadastro
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CadastrarAdmin;
