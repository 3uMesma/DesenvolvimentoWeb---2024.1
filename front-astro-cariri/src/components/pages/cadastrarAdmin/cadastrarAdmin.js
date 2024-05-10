import "./CadastrarAdmin.css"
import Header from "../../layout/header-admin/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png"
import opened_eye from "../../../images/visible.png"
import React, { useRef, useState } from 'react';

function CadastrarAdmin () {
    const [hidden, setHidden] = useState(true);
    const [Password, setPassword] = useState('');

    const toggleShow = () => {
        setHidden(!hidden);
    };
    return (
        <div className="CadastrarAdmin">
            <GlobalStyle/>
            <Header/>

            <div className="CadastrarAdmin-Main">
                <h1 className="CadastrarAdmin-Title">CADASTRO</h1>
            </div>

            <div className="CadastrarAdmin-form">
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
                        <p className="name-input">Senha</p>
                        <div className="password-area">
                            <input name="current-password" id="password-input1" type={hidden ? 'password' : 'text'} value={Password} onChange={(e) => setPassword(e.target.value)}></input>
                            <button type="button" id="botao-senha1" onClick={toggleShow}>
                                <img src={closed_eye} id="img-botao1" alt="mostrar ou esconder senha"></img>
                            </button>
                        </div>
                    </div>

                </form>
                <button type="submit" id="fazer-cadastro" name="fazer-cadastro">Fazer Cadastro</button>
            </div>
        </div>

    )

}

export default CadastrarAdmin;