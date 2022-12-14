import React from 'react';
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Produtos from '../Pages/Produtos/Produtos';
import Header from '../Components/Header/Header';
import Login from '../Pages/Login/Login';
import Administrador from '../Pages/Administrador/Administrador';

import Footer from '../Components/Footer/Footer';
import Cadastro from '../Pages/Cadastro/Cadastro';
import EditarProduto from '../Pages/EditarProduto/EditarProduto';
import AdicionarProduto from '../Pages/AdicionarProduto/AdicionarProduto';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/administrador/' element={<Administrador />}/>
          <Route path='/editarProduto/:id' element={<EditarProduto />}/>
          <Route path='/adicionarProduto' element={<AdicionarProduto />}/>
          <Route path='/produtos/:id' element={<EditarProduto />}/>
          <Route path='/produtos' element={<Produtos />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
      </Switch> 
      <Footer />  
    </BrowserRouter>
  )
}

export default Routes