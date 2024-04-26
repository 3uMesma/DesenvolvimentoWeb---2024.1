import Home from './components/pages/home/Home'
import User from './components/pages/user/User'
import SolicitacaoEvento from './components/pages/solicitarEvento/SolicitacaoEvento'
import VisualizarEvento from './components/pages/visualizarEvento/VisualizarEvento'
import Materiais from './components/pages/materiais/Materiais'
import Login from './components/pages/login/Login'
import HomeAdmin from './components/pages/homeAdmin/HomeAdmin'
import ConteudoMateriais from './components/pages/conteudoMateriais/ConteudoMateriais'
import GerenciarUsers from './components/pages/gerenciarUsers/GerenciarUsers'
import Navbar from './components/layout/header/Navbar'
import Footer from './components/layout/footer/Footer'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import CriarMaterial from './components/pages/criarMaterial/CriarMaterial'
import EditarMaterial from './components/pages/editarMaterial/EditarMaterial'
import EditarDadosLogin from './components/pages/editarDadosLogin/editarDadosLogin'
import GerenciaMateriais from './components/pages/gerenciarMaterial/Materiais'

function App() {
    return(
    	<div className="App">
        	<BrowserRouter>
			{/* <Footer/> */}

			{/*Isso não é nada, só estava mexendo com bootstrap*/}
			{/* <Nav variant="tabs"> */}
				{/* <Nav.Link as={Link} to="/">Página Inicial</Nav.Link> */}
				{/* <Nav.Link as={Link} to="/alunos">Cadastro de Materiais</Nav.Link> */}
				{/* <Nav.Link as={Link} to="/sobre">User</Nav.Link> */}
			{/* </Nav> */}

			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/materiais" element={<Materiais/>}></Route>
				<Route path="/user" element={<User/>}></Route>
				<Route path="/solicitacao-evento" element={<SolicitacaoEvento/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
				<Route path="/home-admin" element={<HomeAdmin/>}></Route>
				<Route path="/conteudo-materiais" element={<ConteudoMateriais/>}></Route>
				<Route path="/material/criar" element={<CriarMaterial/>}></Route>
				<Route path="/material/editar" element={<EditarMaterial/>}></Route>
				<Route path="/visualizar-evento" element={<VisualizarEvento/>}></Route>
				<Route path="/editar-dados-login" element={<EditarDadosLogin/>}></Route>
				<Route path="/gerenciar-users" element={<GerenciarUsers/>}></Route>
				<Route path="/material/gerenciar" element={<GerenciaMateriais/>}></Route>
			</Routes>

			<Footer/>

        	</BrowserRouter>
      	</div>
    );
}

export default App;
