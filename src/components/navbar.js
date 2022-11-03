import React, { useState } from "react";
import logo from "../assets/images/logoNL.svg";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-[#242424] justify-between h-[97px] px-[60px] items-center w-full">
      <img src={logo} className="w-[66.71px]"></img>
      <div className="md:flex items-center justify-between gap-x-[46px] none">
        <Link
          to="/"
          className="text-white no-underline font-poppins font-semibold text-[16px]"
        >
          Home
        </Link>
        <Link
          to="/aboutUs"
          className="text-white no-underline font-poppins font-semibold text-[16px]"
        >
          About Us
        </Link>
        <NavDropdown
          title="Community"
          className="text-white font-semibold font-poppins text-[16px]"
        >
          <NavDropdown.Item>
            <Link
              to="/nwdc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NWDC
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/nuxc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NUXC
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/nadc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NADC
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/nddc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NDDC
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/nlnc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NLNC
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/ncpc"
              className="no-underline text-black font-poppins font-semibold text-[16px]"
            >
              NCPC
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <Link
          to="/blogs"
          className="text-white no-underline font-poppins font-semibold text-[16px]"
        >
          Blogs
        </Link>
        <Link
          to="/joinUs"
          className="text-white no-underline font-poppins font-semibold py-3 px-6 rounded-[41px] bg-[#D62340] text-[16px]"
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
}
