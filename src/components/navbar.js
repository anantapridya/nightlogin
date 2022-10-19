import React from 'react'
import logo from '../assets/images/logoNL.svg'
import { Dropdown } from 'react-bootstrap'

export default function Navbar() {
  return (
    <div className='flex bg-[#242424] justify-between h-[97px] px-[60px] items-center'>
        <img src={logo} className='w-[66.71px]'></img>  
        <div className='flex'>
            <a className='text-white no-underline font-poppins font-semibold'>Home</a>
            <a className='text-white no-underline font-poppins font-semibold mx-[46px]'>About Us</a>
            <a className='text-white no-underline font-poppins font-semibold'>Dropdown</a>
            {/* <Dropdown className='py-0'>
                <Dropdown.Toggle className='text-white'>Dropdown Button</Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            <a className='text-white no-underline font-poppins font-semibold ml-[46px]'>Blogs</a>
        </div>
        <a className='text-white no-underline font-poppins font-semibold py-3 px-6 rounded-[41px] bg-[#D62340]'>Join Us</a>
    </div>
  )
}
