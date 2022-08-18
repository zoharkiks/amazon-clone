import React from 'react'
import { OrderCard } from '../components'

const OrderSummary = () => {
  return (
    <div className='px-4 py-5'>
        <h1 className='font-proximaExtrabold text-2xl lg:text-[2rem]'>ORDER SUMMARY</h1>
        <OrderCard/>
    </div>
  )
}

export default OrderSummary