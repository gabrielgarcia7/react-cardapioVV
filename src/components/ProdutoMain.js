import React from 'react'
import {Card, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './ProdutoMain.css'

function ProdutoMain(props) {
    return (

    <div className="produtoMain">

    <img className="imgProdutoMain" src={require('../imgs/imgsProdutos/' + props.product.img + '.jpg')} alt="Avatar"></img>
    <h3><strong>{props.product.nome}</strong></h3>
    <p>{props.product.descricao}</p>
    <p>{props.product.valor}</p>
    <Button className="m-0" variant="success">Ver detalhes</Button>
        
        {/* <Card className="text-center mx-3 stretched my-3" style={{width: '18rem', background: "#087f23", borderRadius: "1em"}} border="light">
                <Card.Img variant="top" src={require('../imgs/' + props.img + '.jpg')} style={{borderRadius: "0.9em 0.9em 0 0", width: "200px", height: "200px", objectFit: "cover"}}/>
                <Card.Body>
                    <Card.Title style={{color: "white"}}><h3><strong>{props.nome}</strong></h3></Card.Title>
                    <Card.Text style={{color: "white"}}>
                        <p>Lorem ipsum dolor amet...</p>
                    </Card.Text>
                    
                    
                    <Link className="linksMenu" to="/produtos" class="stretched-link"></Link>
                </Card.Body>
        </Card> */}
    </div>

    )
}

export default ProdutoMain