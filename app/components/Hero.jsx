import React from "react";
import Image from "next/image";
import illustration from "../assets/images/illustration-intro.svg";
import pill from "../assets/images/bg-tablet-pattern.svg";

const Hero = ({ isDropdownOpen }) => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 lg:mx-[165px]">
      <div className="lg:hidden absolute left-64 -right-[480px] top-72">
        <Image src={pill} alt="" />
      </div>
      <div className="mt-12 lg:mt-[172px] text-center px-4 lg:px-0 lg:text-left z-50">
        <div className="flex flex-col lg:gap-6 gap-2">
          <h1 className="text-[40px] leading-[56px] lg:text-6xl font-bold text-navy">
            Bring everyone together to build better products.
          </h1>
          <p className="text-base font-normal text-navy opacity-50 lg:w-4/6 mx-6 lg:mx-0">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <button className="z-50 mt-10 bg-orange hover:bg-onHover px-8 py-3 rounded-full shadow-2xl text-white font-bold text-[13px]">
          Get Started
        </button>
      </div>
      <div
        className={`${isDropdownOpen ? "z-50" : "z-50"} relative mt-[120px]`}
      >
        <Image src={illustration} alt="" />
      </div>
    </section>
  );
};

export default Hero;
