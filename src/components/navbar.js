import React, { useState } from "react";
import logo from "../assets/images/logoNL.svg";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import communitiesPage from "../components/commPagesData";

export default function Navbar() {
  const [pageDatas, setPageDatas] = useState(communitiesPage);

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
