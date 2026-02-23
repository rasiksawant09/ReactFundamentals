import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-500 py-4 px-8'>
      <h2 className='text-3xl font-bold text-white'>Worker’s Bloc</h2>
      <div>
        <a href="/" className='text-white text-lg font-bold mx-4'>Home</a>
        <a href="/about" className='text-white text-lg font-bold mx-4'>About</a>
        <a href="/contact" className='text-white text-lg font-bold mx-4'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
