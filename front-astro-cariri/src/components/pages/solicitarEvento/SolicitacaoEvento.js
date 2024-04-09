import "./SolicitacaoEvento.css"
import GlobalStyle from "../../../styles/GlobalStyle";

function SolicitacaoEventos(){
    return(
        <div className="solicitarEvento">
            <GlobalStyle/>
            <div className="solicitarEvento-main">
                <h1>Solicitar Evento</h1>
            </div>
            <div className="solicitarEvento-form">
                <form>
                    <p><strong>Título da Proposta</strong></p> <input name="titulo" className="text-input" type="text"></input>
                    <p><strong>Nome do Interessado</strong></p> <input name="interessado" className="text-input" type="text"></input>
                    <p><strong>Tipo de Contato (email, celular, etc)</strong></p> <input name="contato" className="text-input" type="text"></input>
                    <p><strong>Instituição do Interessado</strong></p> <input name="instituicao" className="text-input" type="text"></input>
                    <p><strong>Tipo de Evento</strong></p> 
                    <select name="tipo" className="select-input">
                        <option selected>Tipo 1</option>
                        <option>Tipo 2</option>
                        <option>Tipo 3</option>
                        <option>Outro</option>
                    </select>
                    <p><strong>Descrição</strong></p> <textarea required name="descricao" className="descricao-input" rows="7" cols="40" placeholder="Explique brevemente a proposta do evento"></textarea>
                    <br></br>
                </form>
            </div>
            <button type="submit" id="botaoSolicitar" name="SolicitarEvento">Solicitar</button>
        </div>
    )
}

export default SolicitacaoEventos;