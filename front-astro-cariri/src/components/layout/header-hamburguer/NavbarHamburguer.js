import { styled } from "styled-components";

export const Container = styled.header`
    width: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    .navbar {
        display: flex;
        flex-direction: column;
    }

    .navbar-elements {
        display: flex;
        width: 100%;
        height: 150px;
        justify-content: space-between;
        align-items: center;
        padding: 0 8vw;
    }

    .img-item-hamburguer {
        width: 30px;
        height: 30px;
    }

    .li-item-hamburguer{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .navbar-title-accepted {
        font-size: 1.5em;
        font-weight: 600;
        padding-left: 0.5em;
    }

    .lista-title-hamburguer {
        padding: 0;
    }

    .btn-menu {
        width: 50px;
        height: 50px;
    }

    .lista-menu {
        background: var(--cor-roxo-claro);
        width: 100vw;
        display: flex;
        flex-direction: column;
        font-size: 1em;
        color: var(--cor-preto);
        padding: 1em 1em;
        margin-top: -50px;
        font-weight: 400;
        gap: 10px;
    }
`;