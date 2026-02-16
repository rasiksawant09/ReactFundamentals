import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 bg-blue-600 flex flex-nowrap gap-10 rounded-4xl overflow-x-auto p-6'>
      {/* <RightCard users={props.users}/> */}
      {
        props.users.map(
          function(elem,idx){
            return <RightCard key={idx} img={elem.img} tag={elem.tag} number={idx + 1} />
          }
        )
      }
    </div>
  )
}

export default RightContent
