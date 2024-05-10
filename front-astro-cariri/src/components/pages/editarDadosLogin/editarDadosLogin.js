import "./EditarDadosLogin.css"
import Header from "../../layout/header-admin/Navbar";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx"
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png"
import opened_eye from "../../../images/visible.png"
import React, { useEffect, useState } from 'react';

function EditarDadosLogin () {
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);
    const [newPassword, setNewPassword] = useState(''); // Estado para a nova senha
    const [confirmPassword, setConfirmPassword] = useState(''); // Estado para a confirmação da senha

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
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (

        <div className="EditarDadosLogin">
            <GlobalStyle/>
            {windowWidth > 850 ? (
                <Header/>
            ) : (
                <HamburguerMenu/>
            )}
            <div className="Editar-Dados-Login-Main">
                <h1 className="Editar-Dados-Login-Main-Title">EDITAR DADOS DE LOGIN</h1>
            </div>

            <div className="EditarDados-form">
                <form>
                    <div className="form-entry">
                        <p className="name-input">Nome de Usuário</p>
                        <input name="username" className="text-input2" type="text"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Email</p>
                        <input name="email" className="text-input2" type="email" placeholder="exemplo@gmail.com"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Nova Senha</p>
                        <div className="password-area">
                            <input name="new-password" id="password-input2" type={hidden2 ? 'password' : 'text'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                            <button type="button" id="botao-senha2" onClick={toggleShow2}>
                                <img src={closed_eye} id="img-botao2" alt="mostrar/esconder senha"></img>
                            </button>
                        </div>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Confirmar Senha</p>
                        <div className="password-area">
                            <input name="confirm-password" id="password-input3" type={hidden3 ? 'password' : 'text'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            <button type="button" id="botao-senha3" onClick={toggleShow3}>
                                <img src={closed_eye} id="img-botao3" alt="mostrar/esconder senha"></img>
                            </button>
                        </div>
                    </div>

                </form>
                <button type="submit" id="salvar-mudancas" name="salvar-mudancas">Salvar Mudanças</button>
            </div>
        </div>

    )

}

export default EditarDadosLogin;