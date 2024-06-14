import "./EditarDadosLogin.css";
import Header from "../../layout/header-admin/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useEffect, useState } from "react";
import { getUserBackApi } from "../../data/api";

function EditarDadosLogin() {
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);
  const userId = '10';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserBackApi(userId);
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const toggleShow2 = () => {
    setHidden2(!hidden2);
  };

  const toggleShow3 = () => {
    setHidden3(!hidden3);
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

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="EditarDadosLogin">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="Editar-Dados-Login-Main">
        <h1 className="Editar-Dados-Login-Main-Title">EDITAR DADOS DE LOGIN</h1>
      </div>

      <div className="EditarDados-form">
        <form>
          <div className="form-entry">
            <p className="name-input">Nome de Usuário</p>
            <input
              name="username"
              className="text-input2"
              placeholder="Seu nome de usuário"
              type="text"
              value={user.nome}
              readOnly
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Email</p>
            <input
              name="email"
              className="text-input2"
              type="email"
              placeholder="exemplo@gmail.com"
              value={user.email}
              readOnly
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Nova Senha</p>
            <div className="password-area">
              <input
                name="new-password"
                id="password-input2"
                placeholder="Sua nova senha"
                type={hidden2 ? "password" : "text"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></input>
              <button
                type="button"
                id="botao-senha2"
                onClick={toggleShow2}
                aria-label={hidden2 ? "Mostrar nova senha" : "Esconder nova senha"}
                aria-pressed={!hidden2}
              >
                <img
                  src={hidden2 ? closed_eye : opened_eye}
                  id="img-botao2"
                  alt={hidden2 ? "Mostrar nova senha" : "Esconder nova senha"}
                ></img>
              </button>
            </div>
          </div>

          <div className="form-entry">
            <p className="name-input">Confirmar Senha</p>
            <div className="password-area">
              <input
                name="confirm-password"
                id="password-input3"
                placeholder="Confirmar nova senha"
                type={hidden3 ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              <button
                type="button"
                id="botao-senha3"
                onClick={toggleShow3}
                aria-label={hidden3 ? "Mostrar confirmação de senha" : "Esconder confirmação de senha"}
                aria-pressed={!hidden3}
              >
                <img
                  src={hidden3 ? closed_eye : opened_eye}
                  id="img-botao3"
                  alt={hidden3 ? "Mostrar confirmação de senha" : "Esconder confirmação de senha"}
                ></img>
              </button>
            </div>
          </div>
        </form>

        <div className="btn-area-editar-dados">
          <button type="submit" id="salvar-mudancas" name="salvar-mudancas">
            Salvar Mudanças
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditarDadosLogin;
