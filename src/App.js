import React, { useState } from 'react'
import LoginForm from './components/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mycontext } from './components/context';
import Home from './components/Home/Home';

import User from './components/User';
import Stock from './components/Stock';
import StockAdmin from './components/StockAdmin';
import Otp from './components/Otp';
import { productData } from './components/products';
import Nav from './components/Nav';

function App() {
  const[prod,setprod]=useState(productData)
  const[ration,setration]=useState('')
const values={prod,setprod,ration,setration}
  return (
    <div>
      <BrowserRouter>
      <Mycontext.Provider value={values}>
      <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/' element={<Home/>}></Route>
         <Route path='/user' element={<User />}></Route>
         <Route path='/stock' element={<Stock />}></Route>
         <Route path='/stockadmin' element={<StockAdmin />}></Route>
         <Route path='/otp' element={<Otp />}></Route>
         <Route path='/nav' element={<Nav />}></Route>
           </Routes>
           </Mycontext.Provider>
      </BrowserRouter>
    
    </div>
  )
}

export default App