import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anisha from "../assets/images/avatar-anisha.png";
import ali from "../assets/images/avatar-ali.png";
import richard from "../assets/images/avatar-richard.png";
import shanai from "../assets/images/avatar-shanai.png";

const Testimonial = () => {
  const data = [
    {
      image: anisha,
      name: "Anisha Li",
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      image: ali,
      name: "Ali Bravo",
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      image: richard,
      name: "Richard Watts",
      text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
    {
      image: shanai,
      name: "Shanai Gough",
      text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative z-50 mt-[146px] lg:mx-4">
      <h3 className="lg:text-[40px] text-4xl leading-[44px] font-bold text-navy text-center">
        What they’ve said
      </h3>
      <div className="hidden lg:flex justify-between items-center lg:mt-[150px] text-center gap-[30px]">
        {data.map((item) => (
          <div key={item.name} className="bg-background pb-6">
            <div className="flex justify-center">
              <Image
                className="w-[72px] h-[72px] object-cover object-center -mt-10"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 mt-4 px-2">
              <h6 className="text-base font-bold text-navy">{item.name}</h6>
              <p className="text-base font-normal text-navy opacity-50">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden p-6">
        <Slider {...settings} className="mt-10">
          {data.map((item) => (
            <div key={item.name} className="bg-background pb-6 mt-10">
              <div className="flex justify-center">
                <Image
                  className="w-[72px] h-[72px] -mt-10 relative z-50"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 mt-4 px-2 text-center">
                <h6 className="text-base font-bold text-navy">{item.name}</h6>
                <p className="text-base font-normal text-navy opacity-50">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center items-center">
        <button className="mt-12 bg-orange hover:bg-onHover px-8 py-3 rounded-full shadow-2xl text-white font-bold text-[13px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
