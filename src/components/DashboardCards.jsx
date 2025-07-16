import React from 'react'
import data from '../data/dashboardCards.js'
import Card from './Card.jsx'
function DashboardCards() {
  return (
    <div className='flex flex-col my-5 md:grid md:grid-cols-2 lg:flex lg:flex-row w-full gap-6'>
      {
        data.map((item,index)=>{
return <Card item={item} key={index}/>
        })
      }
    </div>
  )
}

export default DashboardCards
