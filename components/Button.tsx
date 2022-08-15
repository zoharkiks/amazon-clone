import React from 'react'

const Button = ({title,background}:{title:string,background:string}) => {
  return (
    <div  className={`${background} cursor-pointer w-max px text-white px-3 py-2 rounded-lg font-proximaSemibold`}>{title}</div>
  )
}

export default Button