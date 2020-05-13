import React from 'react'
import ProdutoMain from './ProdutoMain'
import productsData from '../data/productsData'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './ProdutosMain.css'

// - Adicionar ordenação junto com barra de pesquisa
// - Adicionar nome da categoria
// - Adicionar multiplas paginas (limitar 12 produtos por pagina)


function ProdutosMain(props) {

    const max_items = 12
    const last_page = Math.ceil(productsData.length / max_items)
    const page = Math.min(Math.max(props.page ? parseInt(props.page, 10) : 1, 1), last_page) - 1
    const produtosComponents = productsData.slice(page * max_items, page * max_items + max_items).map(product => <ProdutoMain key={product.id} product={product} />)

    return (
        <div className="produtosMain">  

            <div className="caixaPesquisa">
                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
            </div>

            <div className="cardDeck">

                {produtosComponents}
            </div>
            
            <div className="control">
                <Link className="linksMenu" to={"/produtos/"+Math.max(page, 1)}>
                    <Button className="m-0" variant="success">Anterior</Button>
                </Link>
                <Link className="linksMenu" to={"/produtos/"+Math.min(page + 2, last_page)}>
                    <Button className="m-0" variant="success">Próximo</Button>
                </Link>
            </div>
      </div>
    )
}

export default ProdutosMain