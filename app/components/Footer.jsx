import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo-white.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtubce from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row lg:justify-between items-center lg:px-[165px] py-[62px] px-8 relative z-50">
      <div className="flex lg:flex-col flex-col-reverse gap-8 lg:gap-[83px]">
        <div className="mx-auto">
          <Image src={logo} alt="" />
        </div>

        <div className="flex justify-between gap-12 lg:gap-2 cursor-pointer">
          <Image className="w-6 h-6" src={facebook} alt="" />
          <Image className="w-6 h-6" src={youtubce} alt="" />
          <Image className="w-6 h-6" src={twitter} alt="" />
          <Image className="w-6 h-6" src={pinterest} alt="" />
          <Image className="w-6 h-6" src={instagram} alt="" />
        </div>
      </div>
      <div className="text-white flex justify-between gap-12 lg:w-2/6">
        <div className="flex flex-col gap-3 cursor-pointer ">
          <p className="hover:text-orange">Home</p>
          <p className="hover:text-orange">Pricing</p>
          <p className="hover:text-orange">Products</p>
          <p className="hover:text-orange">About Us</p>
        </div>
        <div className="flex flex-col gap-3 cursor-pointer">
          <p className="hover:text-orange">Careers</p>
          <p className="hover:text-orange">Community</p>
          <p className="hover:text-orange">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col lg:gap-[60px]">
        <div className="flex justify-between items-center gap-2">
          <input
            className="placeholder:text-input placeholder:opacity-50 rounded-full py-2.5 px-6"
            type="text"
            placeholder="Updates in your inbox…"
          />
          <button className="bg-orange hover:bg-onHover px-4 py-3 rounded-full shadow-2xl text-white font-bold text-[13px]">
            Go
          </button>
        </div>
        <p className="text-white opacity-50 text-[13px] lg:relative lg:text-left absolute bottom-0 left-0 w-full text-center">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
