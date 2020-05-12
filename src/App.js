import React from 'react';
import './App.css';
import PaginaInicial from './pages/index'
import QuemSomos from './pages/QuemSomos'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/react-cardapioVV/' component={PaginaInicial} />
      <Route exact path='/react-cardapioVV/quem-somos' component={QuemSomos} />
      <Route exact path='/react-cardapioVV/cadastro' component={Cadastro} />
      <Route exact path='/react-cardapioVV/login' component={Login} />
      <Route exact path='/react-cardapioVV/404' component={NotFound} />
      <Redirect to='/react-cardapioVV/404'/>
    </Switch>
  );
}

export default App;
