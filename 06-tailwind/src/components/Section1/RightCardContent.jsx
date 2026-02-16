import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  console.log(props.number);
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.number}</h2>
        <div>
          <p className='text-lg leading-normal mb-10 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, obcaecati!</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><ArrowRight /></button> 
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
