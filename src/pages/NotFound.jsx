import React from 'react'
import Menu from '../components/Menu'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'


const NotFoundPage = () => {
    return (
        <div>
        <Menu />
        
        <h1 style={{textAlign: 'center', padding: '20% 0'}}>404<br/>Página não encontrada :/</h1>
  
        <Rodape />
  
      </div>          
    )
}

export default NotFoundPage