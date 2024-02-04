import React from "react";
import Image from "next/image";
import pill from "../assets/images/bg-tablet-pattern.svg";

const Work = () => {
  return (
    <section className="bg-orange lg:mt-[180px] relative overflow-hidden mt-8">
      <div>
        <Image
          className="absolute opacity-10 lg:w-[600px] lg:left-64 lg:-top-32 -left-80 top-10"
          src={pill}
          alt=""
        />
      </div>
      <div>
        <Image
          className="hidden lg:block absolute opacity-10 w-[600px] -top-[450px] -right-96 rotate-180"
          src={pill}
          alt=""
        />
      </div>
      <div className="relative z-50 lg:flex justify-between items-center lg:mx-[165px] lg:py-[62px] lg:p-0 p-16 text-center">
        <h3 className="lg:text-[44px] text-[40px] leading-[44px] font-bold text-white lg:w-[550px] lg:mb-0 mb-8">
          Simplify how your team works today.
        </h3>
        <button className="relative z-50 bg-white hover:text-onHover px-8 py-3 rounded-full shadow-2xl text-orange font-bold text-[13px] h-[44px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Work;
