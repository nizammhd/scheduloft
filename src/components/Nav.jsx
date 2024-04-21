import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
function Nav() {
    const nav=useNavigate()
  return (
    
        <div className="header">
            <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOCR_HmkCbB5aPzs_SiDsUFBvY2juX7RNqFFfqtgnSA&s" alt="" />
            </div>
            <div className="navs">
                <button onClick={()=>nav('/')}>home</button>       

            </div>
        </div>
  )
}

export default Nav