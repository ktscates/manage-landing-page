import React from "react";
import Image from "next/image";
import pill from "../assets/images/bg-tablet-pattern.svg";

const About = () => {
  const data = [
    {
      id: "01",
      title: "Track company-wide progress",
      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-12 lg:mx-[165px] lg:mt-[132px] mt-24 font-primary">
      <div className="hidden lg:block absolute -left-[480px] mt-64 ">
        <Image src={pill} alt="" />
      </div>
      <div className="relative z-50 flex flex-col gap-6 px-4 lg:px-0">
        <h3 className="lg:text-left text-center lg:text-[40px] text-4xl leading-[44px] font-bold text-navy">
          What’s different about Manage?
        </h3>
        <p className="lg:text-left text-center text-base font-normal text-navy opacity-50 lg:w-4/6">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="hidden lg:flex flex-col gap-[46px] items-center">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between gap-[28px]">
            <p className="w-12 h-10 lg:w-20 lg:h-10 px-8 py-2 items-center rounded-full bg-orange text-white font-bold">
              {item.id}
            </p>
            <div className="flex flex-col gap-[19px]">
              <h5 className="text-base font-bold text-navy">{item.title} </h5>
              <p className="text-base font-normal text-navy opacity-50">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex flex-col gap-8 items-center lg:px-0 px-4 lg:mt-0 mt-5">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col justify-between gap-6">
            <div className="flex items-center">
              <p className="w-13 h-10 lg:w-20 lg:h-10 px-6 py-2 items-center rounded-full bg-orange text-white font-bold">
                {item.id}{" "}
              </p>
              <h5 className="text-base font-bold text-navy bg-orange bg-opacity-10 py-2 px-2">
                {item.title}{" "}
              </h5>
            </div>
            <p className="text-base font-normal text-navy opacity-50">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
