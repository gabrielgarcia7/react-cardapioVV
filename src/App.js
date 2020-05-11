import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Cabecalho from './components/Cabecalho'
import MainPage from './components/MainPage';
import Rodape from './components/Rodape';

function App() {
  return (
    <div>
      <Menu />

      <Cabecalho />
      
      <MainPage />

      <Rodape />

    </div>    
  );
}

export default App;
