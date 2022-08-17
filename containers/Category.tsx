import React from 'react'
import { CategoryCard } from '../components'

const Category = () => {
  return (
    <div className='mt-4 flex flex-col items-center space-y-3 px-4 md:ml-[25%] lg:ml-[15%]'>

<h1 className="font-proximaExtrabold text-2xl lg:text-[2rem]">
        Shop By Category
      </h1>

      <div className="flex">
        <CategoryCard/>
      </div>

    </div>
  )
}

export default Category