import React from 'react'
import './CadastroConteudo.css'


const CadastroConteudo = () => {
    return (
        <div className='cadastroConteudo'>

            <form>
                <h3>Sign Up</h3>

                <div className="loginForm">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu email" />
                </div>

                <div className="loginForm">
                    <label>Nome de Usuario</label>
                    <input type="text" className="form-control" placeholder="Digite seu nome de usuario" />
                </div>

                <div className="loginForm">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
                <br/>

            </form>
        </div>    
    );
}

export default CadastroConteudo