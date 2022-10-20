import React from "react";
import nlhome from "../assets/images/nlhome.svg";
import bg1 from "../assets/images/home1.svg";
import bg2 from "../assets/images/home2.svg";
import bg3 from "../assets/images/home3.svg";
import bg4 from "../assets/images/home4.svg";
import aboutus from "../assets/images/home5.svg";
import bg6 from "../assets/images/home6.svg";
import bg7 from "../assets/images/home7.svg";
import bg8 from "../assets/images/home8.svg";
import orn1 from "../assets/images/home9.svg";
import o from "../assets/images/O.svg";
import nlred from "../assets/images/nlred.svg";
import findit from "../assets/images/findit.svg";
import internalworkshop from "../assets/images/internalworkshop.svg";
import meetour from "../assets/images/meetour.svg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] flex flex-col justify-between">
        <div>
          <Navbar />
          <img src={bg1}></img>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div>
            <img src={nlhome}></img>
            <p
              className="font-poppins inline font-semibold text-white bg-[#2E2E2E] py-[13px] px-[34px]"
              style={{ borderRadius: "0px 25.2174px 25.2174px 37.8261px" }}
            >
              Are You Ready to Login with Us?
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <img src={bg2} className=""></img>
        </div>
      </div>

      <div className="flex flex-col ml-[90px] justify-between h-screen">
        <div className="flex flex-row-reverse">
          <img src={aboutus}></img>
        </div>
        <div className="flex items-center justify-center">
          <img src={nlred} className="pt-[70px]"></img>
          <div className="ml-[80px] flex flex-col pb-[30px]">
            <div>
              <img src={bg4}></img>
              <h5 className="font-poppins font-bold text-[64px]">
                WHO WE ARE?
              </h5>
              <p className="text-justify font-poppins font-medium text-[16px] mb-6 max-w-[1000px]">
                Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM
                yang bergerak di bidang teknologi informasi. BSO ini merupakan
                wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT
                untuk mengembangkan kemampuan, kreativitas, inovasi, dan
                memperluas wawasan terkait bidang-bidang IT.
              </p>
            </div>
            <div>
              <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[16px] no-underline">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <img src={bg6} className=""></img>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-between bg-[#2E2E2E]">
        <div className="bg-white">
          <img src={bg7}></img>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-5 justify-center mb-[125px]">
            <img src={orn1}></img>
            <p className="font-poppins font-bold text-white text-6xl">
              WHAT WE DO?
            </p>
            <img src={orn1}></img>
          </div>
          <div className="flex justify-center gap-20">
            <div className="bg-white w-[450px] flex flex-col items-center px-[45px] pb-[40px] rounded-[71px] justify-between ">
              <div className="flex flex-col items-center">
                <img src={findit} className="mt-[-100px] mb-[30px]"></img>
                <p className="text-center font-poppins font-semibold mb-[40px]">
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
                <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[16px] no-underline">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="bg-white w-[450px] flex flex-col items-center px-[45px] pb-[40px] rounded-[71px] justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={internalworkshop}
                  className="mt-[-100px] mb-[30px]"
                ></img>
                <p className="text-center font-poppins font-semibold mb-[40px]">
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
                <a className="px-[25px] py-[10px] text-white font-poppins bg-black rounded-[31px] font-bold text-[16px] no-underline">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse bg-white">
          <img src={bg8}></img>
        </div>
      </div>

      <div></div>
    </main>
  );
}
