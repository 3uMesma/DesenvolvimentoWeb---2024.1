import "./EditarDadosLogin.css";
import Header from "../../layout/header-admin/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useEffect, useState } from "react";
import { fakeLogin } from "../../data/login";

function EditarDadosLogin() {
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [newPassword, setNewPassword] = useState(""); // Estado para a nova senha
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para a confirmação da senha

  //Função para tratar a visibilidade do campo de senha
  const toggleShow2 = () => {
    setHidden2(!hidden2);
  };

  //Função para tratar a visibilidade do campo de senha
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
  return (
    <div className="EditarDadosLogin">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <div className="Editar-Dados-Login-Main">
        <h1 className="Editar-Dados-Login-Main-Title">EDITAR DADOS DE LOGIN</h1>
      </div>

      {/* Formulário para a edição dos dados de login */}
      <div className="EditarDados-form">
        <form>
          {fakeLogin.map((login, index) => (
            <li key={index}>
              {/**Dados pessoais do user */}
              <div className="form-entry">
                <p className="name-input">Nome de Usuário</p>
                <input
                  name="username"
                  className="text-input2"
                  placeholder="Seu nome de usuário"
                  type="text"
                  value={login.nome}
                ></input>
              </div>

              <div className="form-entry">
                <p className="name-input">Email</p>
                <input
                  name="email"
                  className="text-input2"
                  type="email"
                  placeholder="exemplo@gmail.com"
                  value={login.email}
                ></input>
              </div>

              {/**Campos de senha e tratamento dos inputs */}
              <div className="form-entry">
                <p className="name-input">Nova Senha</p>
                <div className="password-area">
                  <input
                    name="new-password"
                    id="password-input2"
                    placeholder="Sua nova senha"
                    type={hidden2 ? "password" : "text"}
                    value={login.novaSenha}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                  <button type="button" id="botao-senha2" onClick={toggleShow2}>
                    <img
                      src={closed_eye}
                      id="img-botao2"
                      alt="mostrar/esconder senha"
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
                    placeholder="Antiga senha"
                    type={hidden3 ? "password" : "text"}
                    value={login.novaSenha}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                  <button type="button" id="botao-senha3" onClick={toggleShow3}>
                    <img
                      src={closed_eye}
                      id="img-botao3"
                      alt="mostrar/esconder senha"
                    ></img>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </form>

        {/* Botão de Submissão do forms */}
        <div className="btn-area-editar-dados">
          <button type="submit" id="salvar-mudancas" name="salvar-mudancas">
            Salvar Mudanças
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarDadosLogin;
