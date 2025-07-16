import React from 'react'
import { FaArrowUp,FaBell, FaShoppingCart, FaServer, FaCreditCard, FaKey } from 'react-icons/fa';
function Orders() {
    const timelineData = [
  {
    icon: <FaBell />,
    color: 'bg-green-500',
    title: '$2400, Design changes',
    date: '22 DEC 7:20 PM',
  },
  {
    icon: <FaShoppingCart />,
    color: 'bg-red-500',
    title: 'New order #1832412',
    date: '21 DEC 11 PM',
  },
    {
    icon: <FaServer />,
    color: 'bg-blue-500',
    title: 'Server payments for April',
    date: '21 DEC 9:34 PM',
  },
  {
    icon: <FaCreditCard />,
    color: 'bg-orange-400',
    title: 'New card added for order #4395133',
    date: '20 DEC 2:20 AM',
  },
  {
    icon: <FaKey />,
    color: 'bg-pink-500',
    title: 'New card added for order #4395135',
    date: '18 DEC 4:54 AM',
  },
];
  return (
    <div className='flex flex-col my-5 px-5 py-8 bg-white rounded-2xl'>
  <div className='mb-5 flex flex-col gap-4'>
    <h1 className='text-slate-700 font-bold'>Orders overview</h1>
    <div className='flex items-center gap-2'>
      <FaArrowUp className='text-green-600' />
      <h2 className='text-slate-700 font-bold'>24%</h2>
      <p className='text-slate-500'>this month</p>
    </div>
  </div>

  <div className="max-w-md mx-auto bg-white pl-5 py-5 pr-0 rounded-md ">
    <div className="relative pl-8 border-l-2 border-gray-200">
      {timelineData.map((item, index) => (
        <div key={index} className="relative mb-8">
          <div className={`absolute -left-12 top-1.5 rounded-full w-8 h-8 flex items-center justify-center text-white ${item.color}`}>
            {item.icon}
          </div>
          <div className="ml-2">
            <h3 className="text-md font-semibold text-slate-700">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Orders
