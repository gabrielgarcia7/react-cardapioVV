import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function Rodape() {
    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: '#087f23', marginTop: "2em"}}>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#privacidade">Política de privacidade</Nav.Link>
                    <Nav.Link href="#termos">Termos e Condições</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Rodape