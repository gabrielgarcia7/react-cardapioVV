import React from 'react'
import Menu from '../components/Menu'
import Cabecalho from '../components/Cabecalho'
import MainPage from '../components/MainPage'
import Rodape from '../components/Rodape'


const PaginaInicial = () => {
    return (
        <div>
        <Menu />
  
        <Cabecalho />
        
        <MainPage />
  
        <Rodape />
  
      </div>          
    )
}

export default PaginaInicial