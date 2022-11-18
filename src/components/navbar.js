import React, { useState } from "react";
import logo from "../assets/images/logoNL.svg";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import communitiesPage from "../components/commPagesData";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { VscTriangleDown } from "react-icons/vsc";

export default function Navbar() {
  const [pageDatas, setPageDatas] = useState(communitiesPage);
  const [isClick, setClick] = useState(false);
  const [isCommClick, setCommClick] = useState(false);

  return (
    <>
      <nav className="flex bg-[#242424] justify-between md:h-[97px] py-[20px] md:py-0 px-[30px] md:px-[60px] items-center w-full">
        <img src={logo} className="w-[66.71px]"></img>
        <div className="md:flex items-center justify-between gap-x-[46px] none">
          <Link
            to="/"
            className="text-white no-underline font-poppins font-semibold text-[16px] hidden itemnav"
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className="text-white no-underline font-poppins font-semibold text-[16px] hidden itemnav"
          >
            About Us
          </Link>
          <div className="flex items-center gap-1">
            <NavDropdown
              title="Community"
              className="text-white font-semibold font-poppins text-[16px] hidden itemnav"
            >
              {pageDatas.map((page) => (
                <NavDropdown.Item key={page.id}>
                  <Link
                    to={`/communities/${page.path}`}
                    className="no-underline text-black font-poppins font-semibold text-[16px]"
                  >
                    {page.path}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <VscTriangleDown className="text-white text-[18px] hidden itemnav" />
          </div>
          <Link
            to="/joinUs"
            className="text-white no-underline font-poppins font-semibold py-3 px-6 rounded-[41px] bg-[#D62340] text-[16px] hidden itemnav"
          >
            Join Us
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14  text-white cursor-pointer md:hidden"
            onClick={() => setClick(!isClick)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>

      <div
        className={`${
          isClick ? "block md:hidden" : "hidden"
        } grid grid-cols-1 bg-[#242424] px-[30px] py-[50px] `}
      >
        <a
          className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
          href="/"
        >
          Home
        </a>
        <a
          className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
          href="/aboutus"
        >
          About Us
        </a>
        <a
          className="flex items-center text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
          onClick={() => setCommClick(!isCommClick)}
        >
          Community
          <span className="w-6 h-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${isCommClick ? "rotate-90 transform" : ""} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </a>
        <div
          className={`${
            isCommClick ? "block md:hidden" : "hidden"
          } grid grid-cols-1 ml-10`}
        >
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NWDC"
          >
            NWDC
          </a>
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NUXC"
          >
            NUXC
          </a>
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NCPC"
          >
            NCPC
          </a>
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NLNC"
          >
            NLNC
          </a>
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NDDC"
          >
            NDDC
          </a>
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px]"
            href="/communities/NADC"
          >
            NADC
          </a>
        </div>
        <div className="mt-[20px]">
          <a
            className="text-white no-underline font-poppins font-semibold text-[16px] mb-[10px] py-3 px-6 rounded-[41px] bg-[#D62340]"
            href="/joinus"
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  );
}
