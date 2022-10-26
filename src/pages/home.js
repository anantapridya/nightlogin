import React, { useState } from "react";
import nlhome from "../assets/images/nlhome.svg";
import bg1 from "../assets/images/home1.svg";
import bg2 from "../assets/images/home2.svg";
import aboutus from "../assets/images/aboutus.svg";
import bg4 from "../assets/images/home5.svg";
import bg6 from "../assets/images/home6.svg";
import bg7 from "../assets/images/home7.svg";
import orn1 from "../assets/images/home9.svg";
import nlred from "../assets/images/nlred.svg";
import findit from "../assets/images/findit.svg";
import internalworkshop from "../assets/images/internalworkshop.svg";
import meetour from "../assets/images/meetour.svg";
import ourmember from "../assets/images/ourmember.svg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeCommunities from "../components/homecommunitites.js";
import items from "../components/communitiesdata";
import HomeCarousel from "../components/homecarousel";
import homeleft from '../assets/images/btmhomeleft.svg'
import homeright from '../assets/images/btmhomeright.svg'


export default function Home() {
  const [communityitem, setCommunity] = useState(items);
  return (
    <main>
      <div className="h-[100vh] flex flex-col justify-between w-full">
        <div>
          <Navbar />
          <img src={bg1} className="w-[200px] xl:w-auto md:w-[300px]"></img>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div>
            <img
              src={nlhome}
              className="w-[300px] lg:w-auto md:w-[450px]"
            ></img>
            <p
              className="font-poppins inline font-semibold text-white bg-[#2E2E2E] py-[8px] px-[15px] text-[12px] lg:py-[13px] lg:px-[34px] lg:text-[20px] md:text-[15px]"
              style={{ borderRadius: "0px 25.2174px 25.2174px 37.8261px" }}
            >
              Are You Ready to Login with Us?
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <img src={bg2} className="w-[200px] xl:w-auto sm:w-[300px]"></img>
        </div>
      </div>

      <div className="flex flex-row-reverse md:mb-[150px]">
        <img src={bg4} className="w-[200px] md:w-auto"></img>
      </div>

      <div className="flex flex-col items-center mx-[20px] my-[50px] justify-center md:flex-row md:justify-center md:ml-[90px]">
        <img
          src={nlred}
          className="w-[200px] mb-[50px] md:w-[250px] md:mb-0"
        ></img>
        <div className="justify-center flex flex-col md:ml-[5%]">
          <div className="md:mt-[-90px]">
            <img src={aboutus} className="w-[250px] md:w-auto"></img>
            <h5 className="font-poppins font-bold text-[40px] xl:text-[64px]">
              WHO WE ARE?
            </h5>
            <p className="text-justify font-poppins font-medium text-[13px] mb-6 max-w-[1000px] xl:text-[16px]">
              Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang
              bergerak di bidang teknologi informasi. BSO ini merupakan wadah
              bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk
              mengembangkan kemampuan, kreativitas, inovasi, dan memperluas
              wawasan terkait bidang-bidang IT.
            </p>
          </div>
          <div>
            <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[14px] no-underline">
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse  mb-[50px]">
        <img src={bg6} className="w-[200px] md:w-auto"></img>
      </div>

      <div className=" flex flex-col justify-between bg-[#2E2E2E]">
        <div className="bg-white">
          <img src={bg7} className="w-[200px] md:w-auto"></img>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 justify-center mb-[80px] mt-[40px]">
            <img src={orn1} className="w-[40px] md:w-auto"></img>
            <p className="font-poppins font-bold text-white text-[30px] mb-0 md:text-6xl">
              WHAT WE DO?
            </p>
            <img src={orn1} className="w-[40px] md:w-auto"></img>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:flex-row mb-[50px] md:gap-x-[80px]">
            <div className="bg-white w-[350px] flex flex-col items-center px-[20px] pb-[40px] rounded-[50px] justify-between mb-[80px] md:mb-0">
              <div className="flex flex-col items-center">
                <img
                  src={findit}
                  className="mt-[-50px] mb-[30px] w-[150px]"
                ></img>
                <p className="text-center font-poppins font-semibold mb-[40px] text-[14px] md:text-[16px]">
                  FIND IT! (Future Innovations and Discovery IT) merupakan
                  sebuah kompetisi tingkat nasional di bidang Teknologi
                  Informasi. FIND IT! merupakan acara yang bertujuan untuk
                  mengeksplorasi dan mengedukasi publik mengenai berbagai macam
                  elemen di bidang teknologi informasi. FIND IT! terdiri dari
                  berbagai rangkaian acara, antara lain Hackathon, Competitive
                  Programming, Data Analytics Competition, Esports Competition,
                  Capture The Flag Competition dan Webinar Nasional.
                </p>
              </div>
              <div>
                <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[14px] no-underline">
                  READ MORE
                </a>
              </div>
            </div>

            <div className="bg-white w-[350px] flex flex-col items-center px-[20px] pb-[40px] rounded-[50px] justify-between mb-[50px] md:mb-0">
              <div className="flex flex-col items-center">
                <img
                  src={internalworkshop}
                  className="mt-[-50px] mb-[30px] w-[150px]"
                ></img>
                <p className="text-center font-poppins font-semibold mb-[40px] text-[14px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  venenatis pellentesque a praesent eget nisl. Vestibulum
                  laoreet eget euismod a commodo mauris massa. Dignissim et amet
                  pellentesque non in. Nulla sapien odio id eget in tincidunt.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  venenatis pellentesque a praesent eget nisl. Vestibulum
                  laoreet eget euismod a commodo mauris massa. Dignissim et amet
                  pellentesque non in. Nulla sapien odio id eget in tincidunt.
                </p>
              </div>
              <div>
                <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[14px] no-underline">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse bg-white">
          <img src={bg7} className="w-[200px] rotate-180 md:w-auto"></img>
        </div>
      </div>

      <div className="mx-[20px] flex flex-col md:mx-[100px]">
        <div>
          <img src={meetour} className="w-[200px] md:w-auto"></img>
          <p className="font-poppins font-bold text-[30px] mb-[70px] md:text-6xl">
            COMMUNITIES
          </p>
        </div>
        <div className="flex justify-center">
          <HomeCommunities items={communityitem} />
        </div>
      </div>

      <div className="flex flex-col mt-[100px] justify-center">
        <div className="grid">
          <img src={ourmember} className="justify-self-center w-[315px] md:w-auto"></img>
        </div>
        <div>
          <HomeCarousel />
        </div>
      </div>
      <div className="flex justify-between mt-[120px] ">
        <img src={homeleft} className="w-[200px] md:w-[300px] lg:w-auto"></img>
        <img src={homeright} className="w-[200px] md:w-[300px] lg:w-auto"></img>
      </div>
      <Footer />
    </main>
  );
}
