import React from 'react'

function Header() {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white px-4 sm:px-8 md:px-16'>
        <h1 className='text-4xl sm:text-5xl font-bold text-center'>
          Your Next Career Move Starts Here!
        </h1>
        <p className='text-lg sm:text-xl text-center'>
          Get the latest job openings that suit you.
        </p>
    </div>
  )
}

export default Header
