import Home from './components/Home'
import User from './components/User'
import SolicitacaoEvento from './components/SolicitacaoEvento'
import Materiais from './components/Materiais'
import Login from './components/Login'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'

function App() {
    return(
    	<div className="App">
        	<BrowserRouter>

			{/* Acho q falta deixar responsivo */}
			<Navbar/>

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
			</Routes>
        	</BrowserRouter>
      	</div>
    );
}

export default App;
