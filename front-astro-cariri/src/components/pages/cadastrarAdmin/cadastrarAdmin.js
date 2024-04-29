import "./CadastrarAdmin.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import closed_eye from "../../../images/invisible.png"
import opened_eye from "../../../images/visible.png"
import React, { useRef, useState } from 'react';

function CadastrarAdmin () {

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

    return (

        <div className="CadastrarAdmin">
            <GlobalStyle/>
            <Header/>

            <div className="CadastrarAdmin-Main">
                <h1>CADASTRO</h1>
            </div>

            <div className="CadastrarAdmin-form">
                <form>
                    <div className="form-entry">
                        <p className="name-input">Nome de Usuário</p>
                        <input name="username" className="text-input" type="text"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Email</p>
                        <input name="email" className="text-input" type="email" placeholder="exemplo@gmail.com"></input>
                    </div>

                    <div className="form-entry">
                        <p className="name-input">Senha</p>
                        <input name="current-password" id="password-input1" type="password"></input>
                        <button type="button" id="botao-senha1" /*onClick={togglePass("password-input1", "img-botao1")}*/>
                            <img src={closed_eye} id="img-botao1"></img>
                        </button>
                    </div>

                </form>
                <button type="submit" id="fazer-cadastro" name="fazer-cadastro">Fazer Cadastro</button>
            </div>
        </div>

    )

}

export default CadastrarAdmin;