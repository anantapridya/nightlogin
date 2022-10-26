import React, { useState } from "react";
import logo from "../assets/images/logoNL.svg";
import { Dropdown, NavDropdown } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className="flex bg-[#242424] justify-between h-[97px] px-[60px] items-center w-full">
      <img src={logo} className="w-[66.71px]"></img>
      <div className="md:flex items-center justify-between gap-x-[46px] none">
        <a className="text-white no-underline font-poppins font-semibold text-[16px]">
          Home
        </a>
        <a className="text-white no-underline font-poppins font-semibold text-[16px]">
          About Us
        </a>
        <NavDropdown
          title="Community"
          className="text-white font-semibold font-poppins text-[16px]"
        >
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NWDC
            </a>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NUXC
            </a>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NADC
            </a>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NDDC
            </a>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NLNC
            </a>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a className="no-underline text-black font-poppins font-semibold text-[16px]">
              NCPC
            </a>
          </NavDropdown.Item>
        </NavDropdown>
        <a className="text-white no-underline font-poppins font-semibold text-[16px]">
          Blogs
        </a>
        <a className="text-white no-underline font-poppins font-semibold py-3 px-6 rounded-[41px] bg-[#D62340] text-[16px]">
          Join Us
        </a>
      </div>
    </nav>
  );
}
