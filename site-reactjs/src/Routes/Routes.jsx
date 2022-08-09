import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Produtos from '../Pages/Produtos/Produtos';
import Header from '../Components/Header/Header'
import Login from '../Pages/Login/Login';
import Administrador from '../Pages/Administrador/Administrador';
import EditarProduto from '../Pages/EditarProduto/EditarProduto';
import AdicionarProduto from '../Pages/AdicionarProduto/AdicionarProduto';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/administrador/' element={<Administrador />}/>
          <Route path='/adicionarProduto' element={<AdicionarProduto />}/>
          <Route path='/produtos/:id' element={<EditarProduto />}/>
          <Route path='/produtos' element={<Produtos />}/>
          <Route path='/login' element={<Login />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes