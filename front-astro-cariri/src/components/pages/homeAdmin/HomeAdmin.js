import './HomeAdmin.css'
import Header from '../../layout/header-admin/Navbar.js'
import GlobalStyle from '../../../styles/GlobalStyle.js';

function HomeAdmin(){
    return(
        <div className='homeAdmin'>
            <GlobalStyle/>
            <div className='header-style'>
                <Header/>
            </div>
            <div className="homeAdmin-title">
                <h1 className='homeAdmin-title'>Últimos Pedidos</h1>
            </div>
            <div className='homeAdmin-proposals'>
                <div className='homeAdmin-proposals-proposal'>
                    <h2 className='homeAdmin-proposal-title'>PROPOSTA1</h2>
                    <p className='p-proposal'><strong>Interessado: </strong> Interessado1</p>
                    <p className='p-proposal'><strong>Instituição: </strong> Instituição1</p>
                    <p className='p-proposal'><strong>Data: </strong> 01/01/0001, 01h01</p>
                    <p className='p-proposal'><strong>Tipo: </strong> Minicurso</p>
                </div>
                <div className='homeAdmin-proposals-proposal'>
                    <h2 className='homeAdmin-proposal-title'>PROPOSTA2</h2>
                    <p className='p-proposal'><strong>Interessado: </strong> Interessado2</p>
                    <p className='p-proposal'><strong>Instituição: </strong> Instituição2</p>
                    <p className='p-proposal'><strong>Data: </strong> 02/02/0002, 02h02</p>
                    <p className='p-proposal'><strong>Tipo: </strong> Oficina</p>
                </div>
                <div className='homeAdmin-proposals-proposal'>
                    <h2 className='homeAdmin-proposal-title'>PROPOSTA3</h2>
                    <p className='p-proposal'><strong>Interessado: </strong> Interessado3</p>
                    <p className='p-proposal'><strong>Instituição: </strong> Instituição3 Instituição3 Instituição3 Instituição3 Instituição3</p>
                    <p className='p-proposal'><strong>Data: </strong> 03/03/0003, 03h03</p>
                    <p className='p-proposal'><strong>Tipo: </strong> Oficina</p>
                </div>
                <div className='homeAdmin-proposals-proposal'>
                    <h2 className='homeAdmin-proposal-title'>PROPOSTA4</h2>
                    <p className='p-proposal'><strong>Interessado: </strong> Interessado4</p>
                    <p className='p-proposal'><strong>Instituição: </strong> Instituição4</p>
                    <p className='p-proposal'><strong>Data: </strong> 04/04/0004, 04h04</p>
                    <p className='p-proposal'><strong>Tipo: </strong> Oficina</p>
                </div>
                <div className='homeAdmin-proposals-proposal'>
                    <h2 className='homeAdmin-proposal-title'>PROPOSTA5</h2>
                    <p className='p-proposal'><strong>Interessado: </strong> Interessado5</p>
                    <p className='p-proposal'><strong>Instituição: </strong> Instituição5</p>
                    <p className='p-proposal'><strong>Data: </strong> 05/05/0005, 05h05</p>
                    <p className='p-proposal'><strong>Tipo: </strong> Oficina</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin;