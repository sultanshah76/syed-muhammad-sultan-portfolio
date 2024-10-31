import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0f0715] pt-16 pb-16">
      {/* Footer content */}
      <div>
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={180}
          height={180}
          className="mx-auto"
        />
        </div>

        {/* Navigation links */}
        <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#projects" className="hover:text-yellow-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

        {/* Footer copyright */}
        <p className="text-white text-opacity-60 mt-6 text-center">
          © 2024 All Rights Reserved SYED-MUHAMMAD-SULTAN
        </p>
      </div>
  );
};

export default Footer;
