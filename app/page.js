"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <main className="bg-white min-h-screen max-w-[1440px] mx-auto relative overflow-hidden">
      <Navbar toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} />
      {/* Backdrop for the dropdown */}
      {isDropdownOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50"
          onClick={toggleDropdown}
        />
      )}

      <Hero isDropdownOpen={isDropdownOpen} />
      <About />
      <Testimonial />
      <Work />
      <Footer />
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/ktscates"
          target="_blank"
        >
          Cates Nsengiyumva
        </a>
        .
      </div>
    </main>
  );
}
