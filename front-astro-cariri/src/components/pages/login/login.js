import "./login.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png"
import opened_eye from "../../../images/visible.png"
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

function AdminLogin(){

    const [hidden, setHidden] = useState(true);
    const [Password, setPassword] = useState('');

    const toggleShow = () => {
        setHidden(!hidden);
    };

    return(
        <div className="AdminLogin">
            <GlobalStyle/>
            <Header/>

            <div className="AdminLogin-Main">
                <h1 className="AdminLogin-Title">LOGIN</h1>
            </div>
            
            <div className="Login-form">
                <form>
                    <div className="form-entry">
                        <p className="name-input">Nome de Usuário</p>
                        <input name="username" className="text-input2" type="text"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Senha</p>
                        <div className="password-area">
                            <input name="current-password" id="password-id" type={hidden ? 'password' : 'text'} value={Password} onChange={(e) => setPassword(e.target.value)}></input>
                            <button type="button" id="botao-senha" onClick={toggleShow}>
                                <img src={closed_eye} id="img-botao"></img>
                            </button>
                        </div>
                    </div>
                </form>
                <button type="submit" id="fazer-login" name="fazer-login">
                    <Link to="/admin/home">
                        Fazer Login
                    </Link>
                </button>
            </div>
        </div>
        
    )
}

export default AdminLogin;

