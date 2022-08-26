import React from 'react'
import { Navbar, Sidebar } from '../../components'
import { ProductDetails} from '../../containers'

const Details = () => {
  return (
    <div className='bg-gray text-black '>
         <Navbar/>
        <div className="hidden md:flex h-full">
          <Sidebar   />
        </div>
        <ProductDetails/>
    </div>
  )
}

export default Details