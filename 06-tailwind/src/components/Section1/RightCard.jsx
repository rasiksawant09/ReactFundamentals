import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 relative rounded-4xl overflow-hidden shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="working-in-office-girl" />
      <RightCardContent tag={props.tag} number={props.number}/>
    </div>
  )
}

export default RightCard
