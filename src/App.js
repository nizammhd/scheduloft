import React from 'react'
import LoginForm from './components/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mycontext } from './components/context';
import Home from './components/Home/Home';
import DrCard from './components/Home/Doctors';
import BeautyCard from './components/Home/Beauty';

function App() {
const values=[]
  return (
    <div>
      <BrowserRouter>
      <Mycontext.Provider value={values}>
      <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/dr' element={<DrCard />}></Route>
          <Route path='/beauty' element={<BeautyCard />}></Route>
           </Routes>
           </Mycontext.Provider>
      </BrowserRouter>
    
    </div>
  )
}

export default App