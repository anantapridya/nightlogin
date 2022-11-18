import React from "react";
import oprec from "../assets/images/JoinUs/oprec.svg";
import timeline from "../assets/images/JoinUs/timeline.svg";
import tldesktop from "../assets/images/JoinUs/timelinedesktop.svg"
import whatyouget from "../assets/images/JoinUs/whatyouget.svg";
import get1 from "../assets/images/JoinUs/get1.svg";
import get2 from "../assets/images/JoinUs/get2.svg";
import get3 from "../assets/images/JoinUs/get3.svg";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";

export default function JoinUs() {
  return (
    <>
      <img src={oprec} className="mx-[20px] w-[250px] mt-[50px] md:mx-[100px] xl:w-auto"></img>
      <div className="flex flex-col">
        <div className="flex-col items-center flex mt-[30px] ">
          <img src={timeline} className="w-[320px] inline my-[50px] xl:hidden" alt=""></img>
          <img src={tldesktop} className="timeline hidden my-[50px] md:w-[1200px]" alt=""></img>
        </div>
        <div className="flex mt-[20px] justify-center gap-x-[20px]">
          <a className="bg-merah text-white font-poppins font-bold text-[11px] px-[20px] py-[8px] rounded-[12px] md:text-[16px] md:rounded-[24px]">
            Apply Here
          </a>
          <a className="bg-hitam text-white font-poppins font-bold text-[11px] px-[20px] py-[8px] rounded-[12px] md:text-[16px] md:rounded-[24px]">
            Guide Book
          </a>
        </div>
      </div>

      <div className=" flex-row-reverse flex mx-[20px] mt-[50px] mb-[30px] md:mx-[100px]">
        <img src={whatyouget} className="w-[250px] xl:w-auto"></img>
      </div>

      <div className="grid grid-cols-1 mx-[20px] my-[50px] md:grid-cols-3 md:gap-x-6 md:mx-[100px]">
        <div className="grid justify-items-center items-start">
          <img src={get1} className="w-[150px] md:w-auto"></img>
          <p className="font-poppins mt-[10px] font-semibold text-center text-lg md:text-[16px]">
            Hone your skills by actively participate in internal workshops held
            in each community
          </p>
        </div>
        <div className="grid justify-items-center my-[20px] md:my-0">
          <img src={get2} className="w-[150px] md:w-auto"></img>
          <p className="font-poppins  font-semibold text-center text-lg mt-[10px] md:text-[16px] ">
            Enlarge your connection with fellow Night Login Member
          </p>
        </div>
        <div className="grid justify-items-center">
          <img src={get3} className="w-[150px] md:w-auto"></img>
          <p className="font-poppins font-semibold text-center text-lg mt-[10px] md:text-[16px]">
            Get latest information about tech competitions and internship
            opportunities
          </p>
        </div>
      </div>

      <FAQ />
      <Footer />
    </>
  );
}
