import React, { useRef } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const cardOuterRef = useRef(null);
    const nav=useNavigate()

  const scrollToCardOuter = () => {
    if (cardOuterRef.current) {
      cardOuterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
            <div ref={cardOuterRef}  >
            <div className='card' id='cardouter' onClick={navigate}>
                <img src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="picture of doctor" />
                <h2>DOCTOR</h2>
            </div>
            <div className='card'>
                <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" alt="pcture of businessman" />
                <h2>BUSINESS</h2>
            </div>
            <div className="card">
                <img src="https://media.istockphoto.com/id/1249847832/photo/construction-workers-discussing-floor-plans.jpg?s=612x612&w=0&k=20&c=bIC1nLpf27-FExLnV3XJOplUE5-3fcnDyLvkNUgJNFk=" alt="picture of civil eng" />
               <h2>CONSTRUCTION</h2>
            </div>
            <div className="card">
                <img src="https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/c870x524.jpg" alt="picture of barber" />
                <div className='cardname'>
                <h2>BEAUTICIAN</h2>
                </div>
                </div>
               
            </div>
            </div>

        </div>
    </div>
  )
}

export default Home