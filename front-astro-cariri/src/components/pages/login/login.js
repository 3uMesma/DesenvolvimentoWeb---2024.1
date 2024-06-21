import "./login.css";
import Header from "../../layout/header/Navbar";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-hamburguer/NavbarHamburguer.jsx";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png";
import opened_eye from "../../../images/visible.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLoginApi } from "../../../back-api/login/post.js";

import useAuth from "../../../back-api/login/useAuth.js";

function AdminLogin() {
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);
  const [id, setId] = useState([]);

  const { signin } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleShow = () => {
    setHidden(!hidden);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chama a API para login
      const response = await postLoginApi(username, password);
      setId(response);
      console.log("Login bem-sucedido:", response.message);
      const res = signin(
        response.loginData.user_id,
        username,
        response.loginData.email,
        password,
      );
      if (res) {
        setError(res);
        return;
      }
      // Redirecionar para a página após o login bem-sucedido
      navigate("/admin/home");
    } catch (error) {
      // Exibe mensagem de erro usando um alerta
      alert("Credenciais inválidas. Por favor, tente novamente.");
      console.error("Erro ao fazer login:", error);
    }
  };

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
        <form className="form-official" onSubmit={handleSubmit}>
          <div className="form-entry">
            <p className="name-input">Nome de Usuário</p>
            <input
              name="username"
              className="text-input2"
              placeholder="Seu nome de Usuário"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-entry">
            <p className="name-input">Senha</p>
            <div className="password-area">
              <input
                name="current-password"
                id="password-id"
                placeholder="Sua senha"
                type={hidden ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                id="botao-senha"
                onClick={toggleShow}
                aria-label={hidden ? "Mostrar senha" : "Esconder senha"}
                aria-pressed={!hidden}
              >
                <img
                  src={hidden ? closed_eye : opened_eye}
                  id="img-botao"
                  alt={hidden ? "Mostrar senha" : "Esconder senha"}
                />
              </button>
            </div>
          </div>

          {/* Exibição de mensagens de erro */}
          {error && <p className="error-message">{error}</p>}

          {/* Botao de submissao */}
          <div className="btn-area-login">
            <button type="submit" id="fazer-login" name="fazer-login">
              Fazer Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;
