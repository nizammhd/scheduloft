import React, { useState } from 'react';
import './login.css'
import Signup from '../signup/Signup';
import { useNavigate } from 'react-router-dom';
// You can create a separate CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [loginemail, setLoginmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name,setname]=useState('')
  const nav=useNavigate()
  

  

  const handleSignup= (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or validate credentials
    console.log('Form submitted!');
  };
  const handleLogin = ()=>{
    if(name==="admin")
    {
      nav('/stockadmin')
    }else{
      nav('/otp')
    }
    

  }

  return (
    <div className='outerLogin'>  
        <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="login">
        <form>
          <label htmlFor="chk"  aria-hidden="true">Login</label>
          <input type="email"  onChange={(evt)=>setname(evt.target.value)}  name="email" placeholder="Email" required />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default LoginForm;
