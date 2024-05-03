import './HomeAdmin.css'
import Header from '../../layout/header-admin/Navbar.js'
import GlobalStyle from '../../../styles/GlobalStyle.js';

import eventos from "../../data/eventos.json"

function HomeAdmin(){
    return(
        <div className='homeAdmin'>
            <GlobalStyle/>
            <div className='header-style'>
                <Header/>
            </div>
            <div className='body'>
                <div className="homeAdmin-title">
                    <h1 className='homeAdmin-title'>Últimos Pedidos</h1>
                </div>
                <div className=' proposals-container'>
                <ul className='homeAdmin-proposals'>
                    {eventos.map((proposta, index) => (
                    <li key={index}>
                        <div className='homeAdmin-proposals-proposal'>
                            <h2 className='homeAdmin-proposal-title'>{proposta.titulo}</h2>
                            <p className='p-proposal'><strong>Interessado: </strong> {proposta['nome-interessado']}</p>
                            <p className='p-proposal'><strong>Instituição: </strong> {proposta.instituicao}</p>
                            <p className='p-proposal'><strong>Data: </strong> {proposta.data}</p>
                            <p className='p-proposal'><strong>Tipo: </strong> {proposta.tipo}</p>
                        </div>
                    </li>
                    ))}
                </ul>
                    {/* <div className='homeAdmin-proposals-proposal'>
                        <h2 className='homeAdmin-proposal-title'>PROPOSTA5</h2>
                        <p className='p-proposal'><strong>Interessado: </strong> Interessado5</p>
                        <p className='p-proposal'><strong>Instituição: </strong> Instituição5</p>
                        <p className='p-proposal'><strong>Data: </strong> 05/05/0005, 05h05</p>
                        <p className='p-proposal'><strong>Tipo: </strong> Oficina</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin;