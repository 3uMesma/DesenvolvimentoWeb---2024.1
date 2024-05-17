import Home from "./components/pages/Home";
import User from "./components/pages/User";
import SolicitacaoEvento from "./components/pages/SolicitacaoEvento";
import Materiais from "./components/pages/Materiais";
import Login from "./components/pages/Login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Acho q falta deixar responsivo */}
        <Navbar />

        {/* <Footer/> */}

        {/*Isso não é nada, só estava mexendo com bootstrap*/}
        {/* <Nav variant="tabs"> */}
        {/* <Nav.Link as={Link} to="/">Página Inicial</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/alunos">Cadastro de Materiais</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/sobre">User</Nav.Link> */}
        {/* </Nav> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/materiais" element={<Materiais />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route
            path="/solicitacao-evento"
            element={<SolicitacaoEvento />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
