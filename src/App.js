import React from 'react'
import LoginForm from './components/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mycontext } from './components/context';

function App() {
const values=[]
  return (
    <div>
      <BrowserRouter>
      <Mycontext.Provider value={values}>
      <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
           </Routes>
           </Mycontext.Provider>
      </BrowserRouter>
    
    </div>
  )
}

export default App