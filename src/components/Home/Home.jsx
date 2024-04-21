import React, { useRef } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const cardOuterRef = useRef(null);
    const nav=useNavigate()

  const scrollToCardOuter = () => {
    nav('/login')
  };
  function navigate(){
    nav('/dr')

  }

  return (
    
    <div>
        <div className='outer'>
            <div className='hometext'>
            <div className='firsttext'>
            <div className='texthome'>
             
                <h1>Virtual waitlist<br/><span></span> without the wait</h1>
                <p>Revamp your customer flow with hassle-free virtual queues,<br/> intelligent wait times, and automated queue management.<br/> Set up a virtual waitlist in minutes.</p>
                <button onClick={scrollToCardOuter}>Explore</button>
                   
            </div>
            <div className="imagehome">
                <img src="https://trifork.com/wp-content/uploads/2023/12/Virtuelle-ventevaerelse-3-950x594.png" alt="wait " />
                </div>
            </div>
            

        </div>
        </div>
    </div>
  )
}

export default Home