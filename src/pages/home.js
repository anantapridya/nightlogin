import React from 'react'
import bg1 from '../assets/images/home1.svg'
import bg2 from '../assets/images/home2.svg'
import bg3 from '../assets/images/home3.svg'
import bg4 from '../assets/images/home4.svg'
import o from '../assets/images/O.svg'
import nlred from '../assets/images/nlred.svg'

export default function Home() {
  return (
    <>
        <img src={bg1}></img>
        <div className='flex justify-center flex-col items-center mt-[40px] mb-[70px]'>
            <div>
                <h3 className='text-[#D62340] font-bold font-poppins text-[136px] '>NIGHT L<span className=''><img src={o} className='inline py-0 w-max mb-100px'></img></span>GIN</h3>
                <p className='font-poppins inline font-semibold text-white bg-[#2E2E2E] py-[13px] px-[34px]' style={{borderRadius: '0px 25.2174px 25.2174px 37.8261px'}}>Are You Ready to Login with Us?</p>
            </div>
        </div>
        <div className='flex flex-row-reverse'>
            <img src={bg2} className='mb-[85px]'></img>
        </div>
        <div className='flex pl-[152px] justify-center'>
            <img src={nlred} className="mr-[70px] pt-[70px]"></img>
            <div>
                {/* <div className=''>
                    <img src={bg3} className='inline'></img>
                    <p className='font-poppins font-bold text-[20px] mb-0 bg-[#D62340] text-white inline pl-[60px] pr-[80px]' style={{borderRadius: '0 0 25.3px 0'}}>ABOUT US</p>
                </div> */}
                <img src={bg4}></img>
                <h5 className='font-poppins font-bold  text-[64px]'>WHO WE ARE?</h5>
                <p className='text-justify font-poppins font-medium text-[16px] pr-[127px]'>Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait bidang-bidang IT.</p>
                <a className='px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[16px] no-underline'>READ MORE</a>
            </div>
        </div>
    </>
  )
}
