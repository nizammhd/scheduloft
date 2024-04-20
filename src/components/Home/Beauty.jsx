import React, { useState } from 'react'
import './Doctors.css'
import { beautyData } from './drdummy'


function BeautyCard() {
    const [beautysData,setBeautydata]=useState(beautyData)

  return (
    <div>
        {beautysData.map((data)=>
         <div className='card-main' key={data.id} >
               <img style={{width:"100%",height:"200px",borderRadius:"0px"}} src={data.image} alt="" />
               <h2>{data.beauticianName}</h2>
               <h5>{data.specialty}</h5>

         </div>)
}
         </div>

  )
}

export default BeautyCard