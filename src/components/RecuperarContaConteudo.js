import React from 'react'
import './RecuperarContaConteudo.css'


const SenhaConteudo = () => {
    return (
        <div className='senhaConteudo'>

            <form>
                <h3>Recuperar sua conta</h3><br/>
                <p>Digite seu email e manderemos<br/> um codigo para voce</p>

                <div className="loginForm">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu email" />
                </div><br/>

                <button type="submit" className="btn btn-primary btn-block">Mandar email</button><br/>

            </form>
        </div>    
    );
}

export default SenhaConteudo