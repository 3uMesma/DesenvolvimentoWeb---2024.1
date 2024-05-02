import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --cor-roxo-escuro: #210140;
        --cor-roxo: #4D2375;
        --cor-roxo-claro: #A384BC;
        --cor-rosa: #945A76;
        --cor-amarelo: #D9963F;
        --cor-branco: #F2F2F2;
        --cor-preto: #0D0D0D;
        --cor-cinza: #d9d9d9;
        --font-family: 'Merriweather', sans;
    }

    [data-theme="dark"] {
        --cor-roxo-escuro: #4D2375;
        --cor-roxo: #210140;
        --cor-roxo-claro: #A384BC;
        --cor-rosa: #945A76;
        --cor-amarelo: #D9963F;
        --cor-branco: #0D0D0D;
        --cor-preto: #F2F2F2;
        --cor-cinza: #d9d9d9;
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
        background-color: var(--cor-branco);
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