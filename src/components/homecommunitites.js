import React from "react";

const HomeCommunities = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-y-[50px] place-items-center max-w-[1250px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[57px] md:gap-x-[57px]">
      {items.map((community) => {
        const { id, title, desc } = community;
        return (
          <arcticle
            key={id}
            className="flex flex-col items-center bg-[#2E2E2E] px-[30px] justify-between content-between gap-y-[50px] pb-[40px] max-w-[330px] h-[340px] rounded-[47px]"
          >
            <div>
              <p className="font-poppins font-bold bg-[#D62340] rounded-[63px] px-[41px] py-[11px] mt-[-20px] text-white text-[20px] text-center mb-[50px]">
                {title}
              </p>
              <p className="text-white text-center font-poppins font-semibold text-[14px]">
                {desc}
              </p>
            </div>
            <div>
              <a className="bg-white no-underline text-black font-poppins px-[25px] py-[10px] rounded-[31px] font-semibold text-[13px]">
                READ MORE
              </a>
            </div>
          </arcticle>
        );
      })}
    </div>
  );
};

export default HomeCommunities;
