import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import pill from "../assets/images/bg-tablet-pattern.svg";
import bars from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const Navbar = ({ toggleDropdown, isDropdownOpen }) => {
  return (
    <nav className="w-full top-0 start-0 font-primary relative z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto lg:p-0 lg:mt-24 p-4 lg:mx-[165px]">
        <div
          className={`${
            isDropdownOpen ? "z-0" : ""
          } absolute -right-[455px] lg:-right-[165px] lg:-top-48`}
        >
          <Image src={pill} alt="" />
        </div>
        <div className="z-50">
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="z-50 hidden lg:block bg-orange hover:bg-onHover px-8 py-3 rounded-full shadow-2xl text-white font-bold text-[13px]"
          >
            Get started
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm lg:hidden z-50"
            onClick={toggleDropdown}
            aria-controls="navbar-sticky"
            aria-expanded={isDropdownOpen}
          >
            <div>
              {isDropdownOpen ? (
                <Image src={close} alt="logo" />
              ) : (
                <Image src={bars} alt="logo" />
              )}
            </div>
          </button>
        </div>
        <div
          className={`${
            isDropdownOpen
              ? "block lg:hidden text-center w-full top-full bg-white relative z-50"
              : "hidden lg:flex"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-bold lg:flex-row">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-navy cursor-pointer hover:text-gray-400"
                aria-current="page"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-navy cursor-pointer hover:text-gray-400"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-navy cursor-pointer hover:text-gray-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-navy cursor-pointer hover:text-gray-400 z-50"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-navy cursor-pointer hover:text-gray-400 z-50"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
