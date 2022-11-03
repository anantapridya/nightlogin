import bg1all from "../assets/images/imgComunities/bg1all.svg";
import iconNwdc from "../assets/images/imgComunities/iconNwdc.svg";
import logoNwdc from "../assets/images/imgComunities/logoNwdc.svg";
import projectNwdc from "../assets/images/imgComunities/projectNwdc.svg";
import bg2Nwdc from "../assets/images/imgComunities/bg2Nwdc.svg";
import bg3Nwdc from "../assets/images/imgComunities/bg3Nwdc.svg";
import PvpNwdc from "../assets/images/imgComunities/PvpNwdc.svg";
import photo from "../assets/images/imgComunities/photo.svg";
import orn1 from "../assets/images/imgComunities/orn1Nwdc.svg";
import orn2 from "../assets/images/imgComunities/orn2Nwdc.svg";

import homeleft from "../assets/images/btmhomeleft.svg";
import homeright from "../assets/images/btmhomeright.svg";
import Footer from "../components/footer";

const Nwdc = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between w-full">
      <div className="flex flex-row-reverse">
        <img src={bg1all} className="w-[200px] xl:w-auto md:w-[300px]"></img>
      </div>

      <div className="flex flex-col items-center mx-[100px] my-[60px] justify-center md:flex-row md:flex-row-reverse md:justify-center ">
        <img
          src={logoNwdc}
          className="w-[200px] mb-[50px] md:w-[320px] md:mb-0 xl:w-[500px] "
        ></img>
        <div className="justify-center flex flex-col md:mr-[5%]">
          <div className="md:mt-[-90px]">
            <img src={iconNwdc} className="w-[250px] md:w-auto"></img>
            <h5 className="font-poppins font-bold text-[30px] xl:text-[50px]">
              NIGHT LOGIN WEB DEVELOPMENT COMMUNITY
            </h5>
            <p className="text-justify font-poppins font-medium text-[13px] mb-6 max-w-[1000px] xl:text-[16px]">
              NWDC (Nightlogin Web Development Community) merupakan komunitas
              bagi mahasiswa yang memiliki ketertarikan kepada web, baik itu web
              development maupun web design.
            </p>
          </div>
        </div>
      </div>

      <div className="grid mt-[40px]">
        <img
          src={projectNwdc}
          className="justify-self-center w-[200px] xl:w-auto md:w-[300px]"
        ></img>
      </div>

      <div className="flex">
        <img src={bg2Nwdc} className="w-[200px] xl:w-auto md:w-[300px]"></img>
      </div>

      <div className="bg-[#2E2E2E] py-[150px] md:py-[200px] xl:py-[250px]"></div>

      <div className="flex flex-row-reverse">
        <img src={bg3Nwdc} className="w-[200px] xl:w-auto md:w-[300px]"></img>
      </div>

      <div className="grid mt-[40px]">
        <img
          src={PvpNwdc}
          className="justify-self-center w-[200px] xl:w-auto md:w-[300px]"
        ></img>
      </div>

      <div className="flex justify-center my-[40px] xl:my-[80px]">
        <div className="grid grid-cols-1 gap-y-[50px] place-items-center max-w-[1250px] md:grid-cols-2 md:gap-x-[57px]">
          <article className="flex flex-col items-center bg-[#2E2E2E] px-[30px] justify-between content-between gap-y-[50px] pb-[40px]  h-[330px] rounded-[47px] w-[300px]">
            <img
              src={photo}
              alt="photo"
              className="justify-self-center w-[140px] xl:w-auto md:w-[170px] pt-[30px]"
            />
            <div>
              <p className="font-poppins font-bold px-[41px] py-[11px] mt-[-60px] text-white text-[20px] text-center mb-[0px]">
                KIM MINJI
              </p>
              <p className="text-white text-center font-poppins font-semibold text-[14px]">
                President
              </p>
            </div>
          </article>

          <article className="flex flex-col items-center bg-[#2E2E2E] px-[30px] justify-between content-between gap-y-[50px] pb-[40px]  h-[330px] rounded-[47px] w-[300px]">
            <img
              src={photo}
              alt="photo"
              className="justify-self-center w-[140px] xl:w-auto md:w-[170px] pt-[30px]"
            />
            <div>
              <p className="font-poppins font-bold px-[41px] py-[11px] mt-[-60px] text-white text-[20px] text-center mb-[0px]">
                KIM MINJI
              </p>
              <p className="text-white text-center font-poppins font-semibold text-[14px]">
                Vice President
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="flex justify-between mt-[120px] ">
        <img src={homeleft} className="w-[150px] md:w-[300px] lg:w-auto"></img>
        <img src={homeright} className="w-[150px] md:w-[300px] lg:w-auto"></img>
      </div>

      <Footer />
    </div>
  );
};

export default Nwdc;
