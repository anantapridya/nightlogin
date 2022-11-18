import React, { useState } from "react";
import communitiesPage from "../components/commPagesData";
import { useHistory, useParams } from "react-router-dom";
import Footer from "../components/footer";

const CommunitiesPage = () => {
  const { id } = useParams();
  const [pageDatas, setPageDatas] = useState(communitiesPage);

  return (
    <div>
      {pageDatas
        .filter((page) => page.path === id)
        .map((fPage) => (
          <div className="h-[100vh] flex flex-col justify-between w-full">
            <div className="flex flex-row-reverse">
              <img
                src={fPage.bg1}
                className="w-[200px] xl:w-auto md:w-[300px]"
              ></img>
            </div>

            <div className="flex flex-col items-center mx-[100px] my-[60px] justify-center md:flex-row md:flex-row-reverse md:justify-center ">
              <img
                src={fPage.logo}
                className="w-[200px] mb-[50px] md:w-[320px] md:mb-0 xl:w-[500px] "
              ></img>
              <div className="justify-center flex flex-col md:mr-[5%]">
                <div className="md:mt-[-90px]">
                  <img src={fPage.icon} className="w-[250px] md:w-auto"></img>
                  <h5 className="font-poppins font-bold text-[30px] xl:text-[50px]">
                    {fPage.title}
                  </h5>
                  <p className="text-justify font-poppins font-medium text-[13px] mb-6 max-w-[1000px] xl:text-[16px]">
                    {fPage.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid mt-[40px]">
              <img
                src={fPage.project}
                className="justify-self-center w-[200px] xl:w-auto md:w-[300px] mb-[20px]"
              ></img>
            </div>

            <div className="flex">
              <img
                src={fPage.bg2}
                className="w-[200px] xl:w-auto md:w-[300px]"
              ></img>
            </div>

            <div className="bg-[#2E2E2E] py-[150px] md:py-[200px] xl:py-[250px]"></div>

            <div className="flex flex-row-reverse">
              <img
                src={fPage.bg3}
                className="w-[200px] xl:w-auto md:w-[300px]"
              ></img>
            </div>

            <div className="grid mt-[40px]">
              <img
                src={fPage.pvp}
                className="justify-self-center w-[250px] xl:w-auto md:w-[300px]"
              ></img>
            </div>

            <div className="flex justify-center my-[40px] xl:my-[80px]">
              <div className="grid grid-cols-1 gap-y-[50px] place-items-center max-w-[1250px] md:grid-cols-2 md:gap-x-[57px]">
                <div className="flex flex-col justify-center items-center">
                  <img src={fPage.or1} alt="oranamen 1" className="w-[100px]" />
                  <article className="flex flex-col items-center bg-[#2E2E2E] px-[30px] justify-between content-between gap-y-[50px] pb-[40px]  h-[330px] rounded-[47px] w-[300px]">
                    <img
                      src={fPage.photoP}
                      alt="photo"
                      className="justify-self-center w-[140px] xl:w-auto md:w-[170px] pt-[30px]"
                    />
                    <div>
                      <p className="font-poppins font-bold px-[41px] py-[11px] mt-[-60px] text-white text-[20px] text-center mb-[0px]">
                        {fPage.pName}
                      </p>
                      <p className="text-white text-center font-poppins font-semibold text-[14px]">
                        President
                      </p>
                    </div>
                  </article>
                  <img src={fPage.or2} alt="oranamen 2" className="w-[50px]" />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src={fPage.or1} alt="oranamen 1" className="w-[100px]" />
                  <article className="flex flex-col items-center bg-[#2E2E2E] px-[30px] justify-between content-between gap-y-[50px] pb-[40px]  h-[330px] rounded-[47px] w-[300px]">
                    <img
                      src={fPage.photoVp}
                      alt="photo"
                      className="justify-self-center w-[140px] xl:w-auto md:w-[170px] pt-[30px]"
                    />
                    <div>
                      <p className="font-poppins font-bold px-[41px] py-[11px] mt-[-60px] text-white text-[20px] text-center mb-[0px]">
                        {fPage.vpName}
                      </p>
                      <p className="text-white text-center font-poppins font-semibold text-[14px]">
                        Vice President
                      </p>
                    </div>
                  </article>
                  <img src={fPage.or2} alt="oranamen 1" className="w-[50px]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-[120px] ">
              <img
                src={fPage.btmleft}
                className="w-[150px] md:w-[300px] lg:w-auto"
              ></img>
              <img
                src={fPage.btmright}
                className="w-[150px] md:w-[300px] lg:w-auto"
              ></img>
            </div>

            <Footer />
          </div>
        ))}
    </div>
  );
};

export default CommunitiesPage;
