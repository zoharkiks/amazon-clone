import React from 'react'
import Button from './Button'

const CategoryCard = ({image,title} :{image:string,title:string}) => {
  return (
    <div className='flex flex-col rounded-lg bg-white px-6 py-4 font-proxima lg:mt-8'>
      <div className="my-4 flex justify-center">
  <img className=" w-20 h-20" src={image} alt={title} />
      </div>
      <h2 className='font-proximaSemibold text-lg'>{title}</h2>
      <Button title='Shop Now' background='bg-white text-orange border-2 border-orange hover:bg-orange transition hover:text-white'/>
    </div>
  )
}

export default CategoryCard