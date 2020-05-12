import React from 'react';
import './App.css';
import PaginaInicial from './pages/index'
import QuemSomos from './pages/QuemSomos'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Produtos from './pages/Produtos'


import {Route, HashRouter, Redirect, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={PaginaInicial} />
        <Route exact path='/quem-somos' component={QuemSomos} />
        <Route exact path='/cadastro' component={Cadastro} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/produtos' component={Produtos} />
        <Route exact path='/404' component={NotFound} />
        <Redirect to='/404'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
