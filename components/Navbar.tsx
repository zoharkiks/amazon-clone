import React from 'react'
import { Icon } from '@iconify/react';
import {images} from '../constants'


const Navbar = () => {
  return (
    <div className='bg-lightGray px-4 py-4'>
<Icon icon="bytesize:menu" className='h-8 w-8' />
<img src={images.logo.src} alt="" />
    </div>
  )
}

export default Navbar