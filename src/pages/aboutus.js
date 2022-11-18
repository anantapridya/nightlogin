import React from "react";
import nlred from "../assets/images/nlred.svg";
import home1 from "../assets/images/home1.svg";
import aboutus from "../assets/images/aboutus.svg";
import ourteams from "../assets/images/ourteams.svg";
import imgAboutUs from "../assets/images/imgAboutUs.svg";
import homeleft from "../assets/images/btmhomeleft.svg";
import homeright from "../assets/images/btmhomeright.svg";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <>
      <div className="h-[100vh] grid grid-rows-3">
        <img
          src={home1}
          alt=""
          className="inline-flex w-[200px] xl:w-auto md:w-[300px]"
        ></img>
        <div className="flex flex-col items-center mx-[20px] justify-center md:flex-row md:justify-center md:ml-[90px]">
          <img
            src={nlred}
            alt=""
            className="w-[200px] mb-[50px] md:w-[250px] md:mb-0"
          ></img>
          <div className="justify-center flex flex-col md:ml-[5%]">
            <div className="">
              <img src={aboutus} alt="" className="w-[250px] md:w-auto"></img>
              <h5 className="font-poppins font-bold text-[40px] xl:text-[64px]">
                WHO WE ARE?
              </h5>
              <p className="text-justify font-poppins font-medium text-[13px] mb-6 max-w-[1000px] xl:text-[16px]">
                Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM
                yang bergerak di bidang teknologi informasi. BSO ini merupakan
                wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT
                untuk mengembangkan kemampuan, kreativitas, inovasi, dan
                memperluas wawasan terkait bidang-bidang IT.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row-reverse flex mr-[20px] md:mr-[100px] ">
        <img src={ourteams} alt="" className="w-[250px] md:w-auto"></img>
      </div>

      <div className="flex justify-center bg-[#D62340] mx-[10px] md:mx-[100px] rounded-[60px] my-[50px]">
        <h1 className="text-white font-poppins font-bold py-[10px] text-[15px] m-0 md:text-[25px] ">
          PRESIDENT AND VICE PRESIDENT
        </h1>
      </div>

      <div className="grid justify-center gap-y-[30px]  md:flex gap-x-[70px]">
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
      </div>

      <div className="flex justify-center bg-[#D62340] mx-[10px] md:mx-[100px] rounded-[60px] my-[50px]">
        <h1 className="text-white font-poppins font-bold py-[10px] text-[15px] m-0 md:text-[25px] ">
          PUBLIC RELATION TEAM
        </h1>
      </div>
      <div className="grid justify-center gap-y-[30px] md:flex gap-x-[70px] md:flex-wrap md:mx-[100px]">
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
      </div>

      <div className="flex justify-center bg-[#D62340] mx-[10px] md:mx-[100px] rounded-[60px] my-[50px]">
        <h1 className="text-white font-poppins font-bold py-[10px] text-[15px] m-0 md:text-[25px] ">
          CREATIVE MEDIA TEAM
        </h1>
      </div>
      <div className="grid justify-center gap-y-[30px] md:flex gap-x-[70px] md:flex-wrap md:mx-[100px]">
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
      </div>

      <div className="flex justify-center bg-[#D62340] mx-[10px] md:mx-[100px] rounded-[60px] my-[50px]">
        <h1 className="text-white font-poppins font-bold py-[10px] text-[15px] m-0 md:text-[25px] ">
          ADMINISTRATION TEAM
        </h1>
      </div>
      <div className="grid justify-center gap-y-[30px] md:flex md:flex-wrap gap-x-[70px] md:mx-[100px]">
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
        <img src={imgAboutUs} alt="" className="w-[150px] md:w-auto"></img>
      </div>

      <div className="flex justify-between mt-[120px] ">
        <img
          src={homeleft}
          alt=""
          className="w-[150px] md:w-[300px] lg:w-auto"
        ></img>
        <img
          src={homeright}
          alt=""
          className="w-[150px] md:w-[300px] lg:w-auto"
        ></img>
      </div>

      <Footer />
    </>
  );
}
