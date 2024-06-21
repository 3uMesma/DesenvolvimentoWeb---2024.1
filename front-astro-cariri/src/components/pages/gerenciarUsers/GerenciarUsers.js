import "./GerenciarUsers.css";
import GlobalStyle from "../../../styles/GlobalStyle.js";
import Header from "../../layout/header-admin/Navbar.js";
import Footer from "../../layout/footer/Footer.js";
import HamburguerMenu from "../../layout/header-admin-hamburguer/NavbarHamburguer.jsx";
import deleteIcon from "../../../images/Delete.png";
import polygon1_forward from "../../../images/polygon1.png";
import polygon1_backward from "../../../images/polygon1_upwards.png";

import React, { useState, useEffect } from "react";
import { getAllUsersBackApi } from "../../../back-api/users/get";
import { deleteUserBackApi } from "../../../back-api/user/delete";

function GerenciarUsers() {
  const usersPerPage = 10; // Usuários por página
  const [users, setUsers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsersBackApi();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const nextPage = () => {
    const nextIndex = startIndex + usersPerPage;
    if (nextIndex < users.length) {
      setStartIndex(nextIndex);
    }
  };

  const prevPage = () => {
    const prevIndex = startIndex - usersPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUserBackApi(userId);
      // Atualize a lista de usuários após deletar
      const updatedUsers = users.filter((user) => user.user_id !== userId);
      setUsers(updatedUsers);
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      // Trate o erro aqui conforme necessário
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="gerenciar-users">
      <GlobalStyle />
      {windowWidth > 850 ? <Header /> : <HamburguerMenu />}
      <h1 className="gerenciarUsers-title">GERENCIAR USUÁRIOS</h1>
      <div className="gerenciarUsers-list">
        <ul>
          <li>
            <div className="gerenciarUsers-item-titulo">Lista de Usuários</div>
          </li>
          {users
            .slice(startIndex, startIndex + usersPerPage)
            .map((user) => (
              <li key={user.user_id}>
                <div className="gerenciarUsers-item">
                  <p className="gerenciarUsers-item-userName">{user.name_}</p>
                  <button
                    className="delete-icon-button"
                    onClick={() => handleDeleteUser(user.user_id)}
                    aria-label={`Delete ${user.name_}`}
                  >
                    <img
                      className="delete-icon"
                      src={deleteIcon}
                      alt="Delete"
                    />
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div className="btn-scroll">
          {startIndex > 0 && (
            <button onClick={prevPage}>
              <img src={polygon1_backward} alt="Previous" />
            </button>
          )}
          {startIndex + usersPerPage < users.length && (
            <button onClick={nextPage}>
              <img src={polygon1_forward} alt="Next" />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GerenciarUsers;
