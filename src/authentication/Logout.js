import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Logout = () => {
  const nav = useNavigate();
    

    const Logout =()=>{
      alert('your account log-out successfully !!');
      nav('/login');
    }
       

  return (
    <div className='d-flex justify-content-center mt-5'>
        <h4>Click here and logout your account ---></h4> 
        
        <div >
        <button onClick={Logout} className='d-block'>Log out</button>
        </div>
      
    </div>
  )
}

export default Logout
