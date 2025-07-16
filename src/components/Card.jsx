import React from 'react'
import { MdWeekend } from "react-icons/md";
function Card({item}) {
  return (
    <div className='my-5 relative p-5 rounded-2xl bg-white shadow-md shadow-gray-300 lg:w-4xl'>
      <div className={`${item.iconBg} absolute flex justify-center items-center  w-20 h-20 -top-5 left-5 rounded-2xl shadow-xl shadow-[${item.iconBg}]`}><item.icon className="text-white text-3xl" /></div>
      <p className='text-right text-slate-500'>{item.title}</p>
      <h1 className='text-right font-bold text-3xl text-slate-700'>{item.value}</h1>
     <div className="h-[1px] opacity-10 w-full my-6 bg-gradient-to-r from-transparent via-black to-transparent rounded-4xl" />
<div className='flex gap-1'>
   <h3 className={`${item.growthColor} font-bold`}>{item.growth}</h3>
<p className='text-slate-400'>{item.growthText}</p>
</div>

    </div>
  )
}

export default Card
