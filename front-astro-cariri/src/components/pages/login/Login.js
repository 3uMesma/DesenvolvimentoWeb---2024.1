import './Login.css'
import GlobalStyle from '../../../styles/GlobalStyle';

function Login(){
    return(
        <div className="login">
            <GlobalStyle/>
            <div className='login-graybox'>
                <p>Usuário</p>
                <p>Senha</p>
                <button>Fazer Login</button>
            </div>
        </div>
    )
}

export default Login;