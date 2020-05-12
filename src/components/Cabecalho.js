import React from 'react'
import "./Cabecalho.css"

function Cabecalho() {

    return (
        <header>
            {/* <img id="imgLogo" src="img/saladaLogo.svg" alt="teste" title="Salada" /> */}
            {/* <img className="imgLogo" src={require("../imgs/bell_pepper.png")}/> */}
            <div className="titulo">
                <h1 className="tituloSite"><strong>Cardápio</strong>V&V</h1>
                <p className='sloganSite'><em>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    sollicitudin aliquam eleifend.
                </em></p>
            </div>
        </header>
    )
}

export default Cabecalho