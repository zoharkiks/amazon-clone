import React from 'react'
import { images } from '../constants'
import Button from './Button'

const OrderCard = ({image,title,price}:{image:string,title:string,price:string}) => {
  return (
    <div className='flex mt-10 justify-between bg-lightGray px-3 py-4 rounded-lg space-x-10  '>
      <div className="flex h-1/2 w-1/2  ">
        <img className='max-h-32 ' src={image} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className='font-proximaSemibold text-xl lg:text-[2rem]'>{title}</h2>
        <div className="flex justify-between">
<span>{price}</span>
<div className="flex justify-between space-x-2  items-center">
  <Button title='-' background='bg-orange rounded-lg px-2 py-1'/>
  <span className=''>1</span>
  <Button title='+' background='bg-orange rounded-lg px-2 py-1'/>

</div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard