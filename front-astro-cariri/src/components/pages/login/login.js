import "./EditarDadosLogin.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png"
import opened_eye from "../../../images/visible.png"
import React, { useRef, useState } from 'react';

function AdminLogin(){

    /* document.addEventListener("DOMContentLoaded", function togglePass(txt_input, image_button) {

        const input = document.getElementById(txt_input);
        const image = document.getElementById(image_button);
    
        if (input.type === "password"){
            input.type = "text";
            image.src = opened_eye;
        } else {
            input.type = "password";
            image.src = closed_eye;
        }
    
    })*/

    return(
        <div className="AdminLogin">
            <GlobalStyle/>
            <Header/>

            <div className="AdminLogin-Main">
                <h1>LOGIN</h1>
            </div>
            
            <div className="Login-form">
                <form>
                    <div className="form-entry">
                        <p className="name-input">Nome de Usuário</p>
                        <input name="username" className="text-input" type="text"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Senha</p>
                        <input name="current-password" id="password-id" type="password"></input>
                        <button type="button" id="botao-senha" /*onClick={togglePass("password-id", "img-botao")}*/>
                            <img src={closed_eye} id="img-botao"></img>
                        </button>
                    </div>
                </form>
                <button type="submit" id="fazer-login" name="fazer-login">Fazer Login</button>
            </div>
        </div>
        
    )
}

export default AdminLogin;

