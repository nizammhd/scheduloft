import React from 'react'
import "./otp.css"
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

function Otp() {
  const nav=useNavigate()
  return (
    <div className='outer-otp' >
        <Nav/>
      <div className='box-otp'>
        <h3>OTP-VERIFICATION</h3>

        <br/>
        <hr/>
        <p className='otp-text'>Enter verification code we just <br/>send you on your mobile phone<br/>its a 6 digit code <br/>please enter below</p>
        <input type='text' placeholder='Enter your verification code'></input>
        <button onClick={()=>nav('/user')}>Enter</button>
        <a href='' >resend the verification code </a>


      </div>
    </div>
  )
}

export default Otp