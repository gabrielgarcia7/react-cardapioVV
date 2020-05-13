import React from 'react'
import Menu from '../components/Menu'
import ProdutosMain from '../components/ProdutosMain'
import Rodape from '../components/Rodape'


const Produtos = ({ match }) => {
    return (
        <div>
        <Menu />
        
        <ProdutosMain page={match.params.page} />
  
        <Rodape />
  
      </div>          
    )
}

export default Produtos