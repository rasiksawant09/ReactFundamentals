import React from 'react'

const Card = (props) => {
    console.log(props.element);
    return (
        <div>
            <img src={props.element.download_url} alt={props.element.author} className='w-full h-[90%] object-cover mb-2' />
            <h1 className='font-bold text-xl'>{props.element.author}</h1>
        </div>
    )
}

export default Card
