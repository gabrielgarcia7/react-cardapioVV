import React from 'react'
import "./Cabecalho.css"

function Cabecalho() {

    return (
        <header>
            {/* <img id="imgLogo" src="img/saladaLogo.svg" alt="teste" title="Salada" /> */}
            <h1 className="tituloSite"><strong>Cardápio</strong>V&V</h1>
            <p className='sloganSite'><em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                sollicitudin aliquam eleifend. Suspendisse faucibus eu lorem a
                elementum.
            </em></p>
        </header>
    )
}

export default Cabecalho