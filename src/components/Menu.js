import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <Navbar className="navbar-fixed-top" variant="dark" expand="lg" style={{backgroundColor: '#046f1c', position: "sticky"}} fixed="top">
            
            <Link to="/">
                <Navbar.Brand href="/" style={{fontSize: "1.5em"}}>
                    <img
                        alt="Logo do site CardápioV&V"
                        src={require("../imgs/bell_pepper.png")}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}CardápioV&V
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto" style={{fontSize: "1.3em"}}>
                    <Link className="linksMenu" to="/quem-somos">Quem somos</Link>
                    <Link className="linksMenu" to="/cadastro">Cadastro</Link>
                    <Link className="linksMenu" to="/login">Login</Link>
                </Nav>
            
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Menu