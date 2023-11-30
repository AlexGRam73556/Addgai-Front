import React from 'react'

export const Header = () => {
  return (
    <header>
        <button className='bg-agdisable rounded-lg px-10 py-2 mx-2'><span>Logo</span></button>
        <button className='rounded px-10 py-2 mx-2 hover:bg-agpink'><span>Services</span></button>
        <button className='rounded px-10 py-2 mx-2 hover:bg-agpink'><span>About Addgai</span></button>
        <button className='rounded px-10 py-2 mx-2 hover:bg-agpink'><span>Login</span></button>
        <button className='bg-agpurple rounded-lg px-10 py-2 mx-2 hover:bg-agdarkpurple'><span className=' text-white'>Join</span></button>
    </header>
  )
}

export default Header