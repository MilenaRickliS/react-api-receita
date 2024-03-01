//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import logo from './logo-comida.png';

function Header(){ 

  return(
    <div className='container'>
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
        <nav>
          <ul>
            <li><a><Link to='/'>Home</Link></a></li>
            <li><a><Link to='/adicionarnovo'>Adicionar Nova</Link></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
//exportar
export default Header;