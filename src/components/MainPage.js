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
            

            <CardDeck className='mx-auto mt-100'>

                <Categoria nome="Bolos" img="bolo"/>
                <Categoria nome="Frutas" img="frutas"/>
                <Categoria nome="Legumes e Verduras" img="legumes_verduras"/>
                <Categoria nome="Pratos prontos" img="pratos"/>

            </CardDeck>
      </div>
    )
}

export default MainPage