import "./VisualizarEvento.css"
import Header from "../../layout/header/Navbar";
import GlobalStyle from "../../../styles/GlobalStyle";

function VisualizarEvento(){
    return(
        <div className="visualizarEvento">
            <GlobalStyle/>
            <Header/>
            <div className="visualizarEvento-main">
                <h1>VISUALIZAR EVENTO</h1>
            </div>
            
            <div className="visualizarEvento-infos">
                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Título da Proposta</p>
                    <div className="visualizarEvento-infos-entry-value">Proposta de teste</div>
                </div>
            
                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Nome do Interessado</p>
                    <div className="visualizarEvento-infos-entry-value">Fulano de tal</div>
                </div>

                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Tipo de Contato (email, celular, etc)</p>
                    <div className="visualizarEvento-infos-entry-value">fulano@gmail.com</div>
                </div>

                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Instituição do Interessado</p>
                    <div className="visualizarEvento-infos-entry-value">Escola teste</div>
                </div>

                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Tipo de Evento</p>
                    <div className="visualizarEvento-infos-entry-value">Escola teste</div>
                </div>

                <div className="visualizarEvento-infos-entry">
                    <p className="visualizarEvento-infos-entry-name">Descrição</p>
                    <div className="visualizarEvento-infos-entry-value">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae purus sit amet quam condimentum congue a at justo. Cras gravida velit ut est rutrum gravida tincidunt blandit mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras varius urna vel purus aliquam eleifend. Nulla maximus erat iaculis quam ullamcorper, et volutpat metus lacinia. Praesent eu est nulla. Cras in ante aliquam, ornare arcu vitae, lobortis nisl. Vivamus lobortis libero quam, at vulputate felis accumsan eu. Aenean fringilla ligula a ligula dictum, sed dictum ex aliquam. Sed eu justo molestie, vestibulum magna gravida, vulputate nibh. Etiam bibendum nisi orci. Etiam at odio fermentum, pretium erat eget, mollis neque. Integer sit amet lacus ut elit tempor viverra. Maecenas sapien ligula, luctus vitae venenatis et, tristique in lectus.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualizarEvento;