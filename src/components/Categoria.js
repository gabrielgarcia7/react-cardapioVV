import React from 'react'
import {Button, Card} from 'react-bootstrap'

function Categoria(props) {
    return (
        
    <Card className="text-center mx-3 stretched my-3" style={{width: '18rem', background: "#087f23", borderRadius: "1em"}} border="light">
            <Card.Img variant="top" src={require('../imgs/' + props.img + '.jpg')} style={{borderRadius: "0.9em 0.9em 0 0"}}/>
            <Card.Body>
                <Card.Title style={{color: "white"}}><h3><strong>{props.nome}</strong></h3></Card.Title>
                <Card.Text style={{color: "white"}}>
                    <p>Lorem ipsum dolor amet...</p>
                </Card.Text>
                {/* <Button variant="light">Confira as melhores opções!</Button> */}
                <a href={props.nome} class="stretched-link"></a>
            </Card.Body>
    </Card>

    )
}

export default Categoria