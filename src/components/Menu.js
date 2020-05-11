import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Menu() {
    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: '#087f23'}}>
            <Navbar.Brand href="#home">CardápioV&V</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Quem somos</Nav.Link>
                <Nav.Link href="#link">Cadastro</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu