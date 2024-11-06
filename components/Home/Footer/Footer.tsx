import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f0715] pt-16 pb-16">
      {/* Logo */}
      <div>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center space-x-12 mt-8"> {/* Adjusted space-x-12 for more horizontal space */}
        <Link
          href="https://www.linkedin.com/in/syed-muhammad-sultan"
          className="text-white text-2xl bg-[#0077b5] p-3 rounded-full hover:bg-[#005582] transition-colors"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com/sultanshah76"
          className="text-white text-2xl bg-[#333] p-3 rounded-full hover:bg-[#1a1a1a] transition-colors"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
      </div>

      {/* Footer copyright */}
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 All Rights Reserved SYED-MUHAMMAD-SULTAN
      </p>
    </div>
  );
};

export default Footer;
