import './libras.css'
import React, { useEffect } from 'react';
import libras_icon from '../../../images/libras.png'


function LibrasBtn(){
    useEffect(() => {
        // Verifica se a biblioteca do VLibras está disponível
        if (window.VLibras) {
          // Inicializa o widget do VLibras
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        }
      }, []);
    return(
        <div className='second-navbar'>
                <img className='icon-acessibility' src={libras_icon} 
                    alt='ícone da ferramenta para suporte em libras'></img>
        </div>
    )
}
export default LibrasBtn;