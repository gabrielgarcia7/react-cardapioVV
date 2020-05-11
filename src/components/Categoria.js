import React from 'react'
import {Button, Card} from 'react-bootstrap'

function Categoria(props) {
    return (
        
    <Card className="text-center mx-4" style={{width: '18rem', background: "#087f23"}}>
            <Card.Img variant="top" src={require('../imgs/' + props.img + '.png')} />
            <Card.Body>
                <Card.Title style={{color: "white"}}>{props.nome}</Card.Title>
                <Card.Text style={{color: "white"}}>
                    Lorem ipsum dolor amet...
                </Card.Text>
                <Button variant="light">Veja</Button>
            </Card.Body>
    </Card>

    )
}

export default Categoria