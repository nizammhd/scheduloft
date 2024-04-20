import React, { useState } from 'react';
import './login.css'
import Signup from '../signup/Signup';
// You can create a separate CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [loginemail, setLoginmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name,setname]=useState('')

  

  const handleSignup= (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or validate credentials
    console.log('Form submitted!');
  };
  const handleLogin = ()=>{

  }

  return (
    <div className='outerLogin'>  
        <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt"  onChange={(evt)=>setname(evt)} placeholder="User name" required />
          <input type="email"  onChange={(evt)=>setEmail(evt)} name="email" placeholder="Email" required />
          <input type="password" name="pswd" onChange={(evt)=>setPassword(evt)} placeholder="Password" required />
          <button onClick={Signup}>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk"  aria-hidden="true">Login</label>
          <input type="email"  onChange={(evt)=>setLoginmail(evt)}  name="email" placeholder="Email" required />
          <input type="password"  onChange={(evt)=>setLoginPassword(evt)} name="pswd" placeholder="Password" required />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default LoginForm;
