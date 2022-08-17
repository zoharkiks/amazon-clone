import React from 'react'
import Button from './Button'

const CategoryCard = ({image,title} :{image:string,title:string}) => {
  return (
    <div className='flex items-center flex-col rounded-lg bg-white px-6 py-4 font-proxima lg:mt-8 h-max w-full space-y-4' >
      <div className="my-4 flex justify-center w-max object-cover">
  <img className=" w-[10rem] h-[10rem] object-contain lg:w-[13rem]" src={image} alt={title} />
      </div>
      <h2 className='font-proximaBold text-xl'>{title}</h2>
      <Button title='Shop Now' background='bg-white text-orange border-2 border-orange hover:bg-orange transition hover:text-white'/>
    </div>
  )
}

export default CategoryCard