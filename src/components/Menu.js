import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Menu.css'

function Menu() {
    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: '#087f23'}}>
            <Navbar.Brand href="#home">CardápioV&V
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div id="pesquisa">
                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                <img src={require("../imgs/search.svg")} id="btnBusca" alt="Buscar" />
            </div>
            <Nav className="ml-auto" style={{fontSize: "1.5em"}}>
                <Nav.Link href="#quem-somos">Quem somos</Nav.Link>
                <Nav.Link href="#cadastro">Cadastro</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu