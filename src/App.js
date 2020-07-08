import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from  'react-router-dom'
import Header from './componentes/header/index';
import Lancamentos from "./paginas/lancamentos/Lancamentos.jsx";
import Inicio from "./paginas/inicio/Inicio.jsx";
import Busca from "./paginas/busca/busca.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <NavLink to="/inicio" className="navegacao-component">Inicio</NavLink>
      <NavLink to="/lancamentos" className="navegacao-component">Lançamentos</NavLink>
      <NavLink to="/busca" className="navegacao-component">Busca</NavLink>
        <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route path="/lancamentos" component={Lancamentos}/>
        <Route path="/inicio" component={Inicio}/>
        <Route path="/busca" component={Busca}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
