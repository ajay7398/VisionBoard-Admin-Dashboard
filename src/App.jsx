import React from 'react'
import Header from './components/Header.jsx'
import GraphCardSection from './components/GraphCardSection.jsx'
import Projects from './components/Projects.jsx'
import Orders from './components/Orders.jsx'
import Footer from './components/Footer.jsx'
import DashboardCard from './components/DashboardCards.jsx'

function App() {
   
  return (
     <div className='conainer max-w-[90%] mx-auto box-border relative'>
      <Header/>
    <DashboardCard/>
    <GraphCardSection/>
    <div className='lg:flex lg:items-center lg:gap-8'>
  <Projects className='h-screen'/>
    <Orders className='h-screen'/>
    </div>
  
    <Footer/>
      {/* <SalesChart/>  */}
    </div>
  )
}

export default App
