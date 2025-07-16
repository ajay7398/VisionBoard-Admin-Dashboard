import React from 'react'
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <div className='flex flex-col my-5 py-5 text-center lg:flex-row lg:gap-1 text-slate-400'>
      
<p>©<span>2025, made with <FaHeart className='text-gray-500 inline' /> by </span></p>
<p><span className='text-slate-700 font-bold'> Ajay</span> for a better web.</p>
     
    
    </div>
  )
}

export default Footer
