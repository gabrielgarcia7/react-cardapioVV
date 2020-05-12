import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Menu.css'

function Menu() {
    return (
        <Navbar className="navbar-fixed-top" variant="dark" expand="lg" style={{backgroundColor: '#046f1c', position: "sticky"}} fixed="top">
            <Navbar.Brand href="/react-cardapioVV/" style={{fontSize: "1.5em"}}>
                <img
                    alt=""
                    src={require("../imgs/bell_pepper.png")}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                />{' '}
                CardápioV&V</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {/* <div id="pesquisa">
                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                <img src={require("../imgs/search.svg")} id="btnBusca" alt="Buscar" />
            </div> */}
            <Nav className="ml-auto" style={{fontSize: "1.3em"}}>
                <Nav.Link className="ml-4" href="quem-somos">Quem somos</Nav.Link>
                <Nav.Link className="ml-4" href="cadastro">Cadastro</Nav.Link>
                <Nav.Link className="ml-4" href="login">Login</Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu