import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --cor-navbar: #4D2375; //roxo
        --cor-footer: #4D2375; //roxo
        --cor-nav-footer-text: #D9963F; //amarelo
        --cor-nav-footer-text-selected: #fcd6a4; //amarelo claro
        --cor-main-background: #F2F2F2; //branco
        --cor-secondary-background: #d9d9d9; //cinza
        --cor-item-background: #F2F2F2; //branco
        --cor-titulo-home: #F2F2F2; //branco
        --cor-titulo: #4D2375; //roxo
        --cor-texto: #0D0D0D; //preto
        
        --cor-roxo-escuro: #210140;
        --cor-roxo: #4D2375;
        --cor-roxo-claro: #A384BC;
        --cor-rosa: #945A76;
        --cor-amarelo: #D9963F;
        --cor-preto: #0D0D0D;
        --cor-cinza: #d9d9d9;
        --font-family: 'Merriweather Sans', sans-serif;
    }

    [data-theme="dark"] {
        --cor-navbar: #210140;
        --cor-footer: #210140;
        --cor-nav-footer-text: #D9963F;
        --cor-main-background: #0D0D0D;
        --cor-secondary-background: #F2F2F2; //branco
        --cor-item-background: #c9c9c9;
        --cor-titulo-home: #0D0D0D;
        --cor-titulo: #F2F2F2;
        --cor-texto: #F2F2F2;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: var(--font-family);
        vertical-align: baseline;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100vh;
    }

    ul, li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
      }      

    body {
        background-color: var(--cor-main-background);
    }

    hr {
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        width:50%;
        background-color: var(--cor-rosa);
    }
`;
