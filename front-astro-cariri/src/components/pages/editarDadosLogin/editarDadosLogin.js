import "./EditarDadosLogin.css";
import Header from "../../layout/header-admin/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserBackApi } from "../../../back-api/user/get.js";
import { putUserBackApi } from "../../../back-api/user/put.js";

import useAuth from "../../../back-api/login/useAuth.js";

function EditarDadosLogin() {
  const navigate = useNavigate();

  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changeUser, setUser] = useState(null);
  const [changeName, setName] = useState("");
  const [changeEmail, setEmail] = useState("");
  const { user } = useAuth();
  const { sigout } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user data...");
        const userData = await getUserBackApi(user.id);
        setUser(userData);
        setName(userData.name_);
        setEmail(userData.email);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []); // Ensure this runs only once on mount

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    console.log("Dados a serem enviados:", {
      name: changeName,
      email: changeEmail,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    });

    try {
      await putUserBackApi(user.id, {
        new_name: changeName,
        new_email: changeEmail,
        new_password: newPassword,
      });
      alert("Dados atualizados com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      alert("Erro ao atualizar os dados");
    }
  };

  const logoutSubmit = async (e) => {
    e.preventDefault();
    sigout();

    console.log("Logout bem-sucedido!");
    // Redirecionar para a página inicial após o logout
    navigate("/");
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-entry">
            <p className="name-input">Nome de Usuário</p>
            <input
              name="username"
              className="text-input2"
              placeholder="Seu nome de usuário"
              type="text"
              value={changeName}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-entry">
            <p className="name-input">Email</p>
            <input
              name="email"
              className="text-input2"
              type="email"
              placeholder="exemplo@gmail.com"
              value={changeEmail}
              onChange={(e) => setEmail(e.target.value)}
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
                aria-label={
                  hidden2 ? "Mostrar nova senha" : "Esconder nova senha"
                }
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
                aria-label={
                  hidden3
                    ? "Mostrar confirmação de senha"
                    : "Esconder confirmação de senha"
                }
                aria-pressed={!hidden3}
              >
                <img
                  src={hidden3 ? closed_eye : opened_eye}
                  id="img-botao3"
                  alt={
                    hidden3
                      ? "Mostrar confirmação de senha"
                      : "Esconder confirmação de senha"
                  }
                ></img>
              </button>
            </div>
          </div>

          <div className="btn-area-editar-dados">
            <button type="submit" id="salvar-mudancas" name="salvar-mudancas">
              Salvar Mudanças
            </button>
          </div>
        </form>
        <form onSubmit={logoutSubmit}>
          <div className="btn-area-editar-dados">
            <button type="submit" id="logout" name="logout">
              Logout
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditarDadosLogin;
