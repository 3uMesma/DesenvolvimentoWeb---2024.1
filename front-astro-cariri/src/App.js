import Home from "./components/pages/home/Home";
import SolicitacaoEvento from "./components/pages/solicitarEvento/SolicitacaoEvento";
import VisualizarEvento from "./components/pages/visualizarEvento/VisualizarEvento";
import Materiais from "./components/pages/materiais/Materiais";
import Login from "./components/pages/login/login";
import HomeAdmin from "./components/pages/homeAdmin/HomeAdmin";
import ConteudoMateriais from "./components/pages/conteudoMateriais/ConteudoMateriais";
import GerenciarUsers from "./components/pages/gerenciarUsers/GerenciarUsers";
import Navbar from "./components/layout/header/Navbar";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import CriarMaterial from "./components/pages/criarMaterial/CriarMaterial";
import EditarMaterial from "./components/pages/editarMaterial/EditarMaterial";
import EditarDadosLogin from "./components/pages/editarDadosLogin/editarDadosLogin";
import GerenciaMateriais from "./components/pages/gerenciarMaterial/Materiais";
import CadastrarAdmin from "./components/pages/cadastrarAdmin/cadastrarAdmin";

import { AuthProvider } from "./back-api/login/auth";
import useAuth from "./back-api/login/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Footer/> */}

        {/*Isso não é nada, só estava mexendo com bootstrap*/}
        {/* <Nav variant="tabs"> */}
        {/* <Nav.Link as={Link} to="/">Página Inicial</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/alunos">Cadastro de Materiais</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/sobre">User</Nav.Link> */}
        {/* </Nav> */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/materiais" element={<Materiais />}></Route>
            <Route
              path="/user"
              element={<Private Item={EditarDadosLogin} />}
            ></Route>
            <Route
              path="/solicitacao-evento"
              element={<SolicitacaoEvento />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/admin/home"
              element={<Private Item={HomeAdmin} />}
            ></Route>
            <Route
              path="/conteudo-materiais/:material_id"
              element={<Private Item={ConteudoMateriais} />}
            ></Route>
            <Route
              path="/material/criar"
              element={<Private Item={CriarMaterial} />}
            ></Route>
            <Route
              path="/material/editar"
              element={<Private Item={EditarMaterial} />}
            ></Route>
            <Route
              path="/visualizar-evento"
              element={<VisualizarEvento />}
            ></Route>
            <Route
              path="/gerenciar-users"
              element={<Private Item={GerenciarUsers} />}
            ></Route>
            <Route
              path="/material/gerenciar"
              element={<Private Item={GerenciaMateriais} />}
            ></Route>
            <Route
              path="/admin/cadastrar"
              element={<Private Item={CadastrarAdmin} />}
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
