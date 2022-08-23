import React from 'react'
import { Navbar, Sidebar } from '../components'
import { OrderSummary } from '../containers'


const checkout = () => {
  return (
    <div className='bg-gray text-black '>
        <Navbar/>
        <div className="hidden md:flex h-full">
          <Sidebar   />
        </div>
        <OrderSummary/>
    </div>
  )
}

export default checkout