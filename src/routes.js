

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Header from './components/Header'
import Footer from "./components/Footer"

import Home from './pages/Home'
import Detalhes from './pages/Detalhes'
import AdicionarNovo from './pages/AdicionarNovo'
import Erro from './pages/Erro'


const RoutesApp = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/detalhes/:id' element={<Detalhes/>}/>
        <Route path="/adicionarnovo" element={<AdicionarNovo/>}/>   

        <Route path="*" element={<Erro/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
};

export default RoutesApp;