import React from 'react'
import {CardDeck} from 'react-bootstrap'
import Categoria from './Categoria'
import "./MainPage.css"

function MainPage() {
    return (
        <div className="mainPage">  

            <h1 style={{
                textAlign: "center",
                paddingBottom: "1em"
                }}>
                    O que deseja buscar hoje?</h1>

            <div className="caixaPesquisa">
                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                {/* <img src={require("../imgs/search.svg")} id="btnBusca" alt="Buscar" /> */}
            </div>
{/*             
            
            {/* <CardDeck className='mx-auto mt-100'> */}
            <div className="cardDeck">

                <Categoria nome="Bolos" img="bolo"/>
                <Categoria nome="Frutas" img="frutas"/>
                <Categoria nome="Legumes e Verduras" img="legumes_verduras"/>
                <Categoria nome="Pratos prontos" img="pratos"/>
            </div>

            {/* </CardDeck> */}
      </div>
    )
}

export default MainPage