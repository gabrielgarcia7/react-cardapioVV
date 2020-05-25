import React from 'react'
import './LoginConteudo.css'


const LoginConteudo = () => {
    return (
        <div className='loginConteudo'>

            <form>
                <h3>Sign In</h3>

                <div className="loginForm">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu email" />
                </div>

                <div className="loginForm">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                </div>

                <div className="loginForm">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberCheck" />
                        <label className="custom-control-label" htmlFor="rememberCheck">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    <a href="/RecuperarConta">Esqueci minha senha</a>
                </p>

            </form>
        </div>    
    );
}

export default LoginConteudo