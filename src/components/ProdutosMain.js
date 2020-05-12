import React from 'react'
import ProdutoMain from './ProdutoMain'
import productsData from '../data/productsData'
import './ProdutosMain.css'

// - Adicionar ordenação junto com barra de pesquisa
// - Adicionar nome da categoria
// - Adicionar multiplas paginas (limitar 12 produtos por pagina)


function ProdutosMain() {

    const produtosComponents = productsData.map(product => <ProdutoMain key={product.id} product={product} />)

    return (
        <div className="produtosMain">  

            <div className="caixaPesquisa">
                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
            </div>

            <div className="cardDeck">

                {produtosComponents}
            </div>
      </div>
    )
}

export default ProdutosMain