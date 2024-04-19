import "./EditarDadosLogin.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";
import React, { useRef, useState } from 'react';

function EditarDadosLogin () {

    return (

        <div className="EditarDadosLogin">
            <GlobalStyle/>
            <Header/>

            <div className="Editar-Dados-Login-Main">
                <h1>EDITAR DADOS DE LOGIN</h1>
            </div>

            <div className="EditarDados-form">
                <form>
                    <p className="name-input">Nome de Usuário</p> <input name="username" className="text-input" type="text"></input>
                    <p className="name-input">Email</p> <input name="email" className="text-input" type="text"></input>
                    <p className="name-input">Senha Atual</p> <input name="current-password" className="text-input" type="password"></input> 
                    <p className="name-input">Nova Senha</p> <input name="new-password" className="text-input" type="password"></input>
                    <p className="name-input">Confirmar Senha</p> <input name="confirm-password" className="text-input" type="password"></input>
                </form>
                <button type="submit" id="salvar-mudancas" name="salvar-mudancas">Salvar Mudanças</button>
            </div>
        </div>

    )

}

export default EditarDadosLogin;