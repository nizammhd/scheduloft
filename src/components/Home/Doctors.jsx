import React, { useState } from 'react'
import './Doctors.css'
import { dummyData } from './drdummy'


function DrCard() {
    const [doctorData,setDoctordata]=useState(dummyData)

  return (
    <div>
        {doctorData.map((data)=>
         <div className='card-main' key={data.id} >
               <img style={{width:"100%",height:"200px",borderRadius:"0px"}} src={data.image} alt="" />
               <h2>{data.doctorname}</h2>
               <h5>{data.category}</h5>

         </div>)
}
         </div>

  )
}

export default DrCard