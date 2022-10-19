import React from 'react'
import logo from '../assets/images/logoNL.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import line from '../assets/images/line.svg'



export default function Footer() {
  return (
    <div>
        <div className='bg-[#242424] flex items-center justify-center py-[54px]'>
            <img src={logo} className='h-[69px]'></img>
            <div className='ml-[15px]'>
                <p className='text-white font-poppins font-bold text-[18px] m-0'>NIGHT LOGIN DTETI</p>
                <p className='text-white font-poppins font-bold text-[18px] mb-[10px]'>FT UGM</p>
                <div className='flex '>
                    <img src={instagram}></img>
                    <img src={linkedin} className='mx-[18px]'></img>
                    <img src={line}></img>
                </div>
            </div>
        </div>
        <div className='flex justify-center bg-[#D62340] text-white font-poppins text-[12px] font-semibold py-[8px]'>©2022 by Night Login DTETI FT UGM</div>
    </div>
  )
}
