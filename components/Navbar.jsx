import React from 'react'
import logo from './../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[5vw] py-4 absolute w-full z-50  top-0'>
      <Link to='/'><img src={logo} alt="" className='w-8'/></Link>
      <div className='flex items-center gap-3'>
        <Link to='/dashboard'><p>Dashboard</p></Link>
       <Link to='/view-card'> <p>View</p></Link>
        <Link to='/create-help-center'><button className='p-2 text-white bg-black rounded-md text-md'>Create Help Center</button></Link>
      </div>
    </div>
  )
}

export default Navbar
