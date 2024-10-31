import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* text-content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-700 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-yellow-600 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full stack Development
              </p>
            </div>
          </div>
        </div>
        {/* stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center"
        >
          {[
            {
              src: "/images/customer.png",
              label: "Satisfied Customers",
              value: aboutInfo.client,
            },
            {
              src: "/images/experience.png",
              label: "Years Experience",
              value: aboutInfo.experience,
            },
            {
              src: "/images/completed.png",
              label: "Completed Projects",
              value: aboutInfo.project,
            },
            {
              src: "/images/rocket.png",
              label: "Website Launched",
              value: aboutInfo.website,
            },
          ].map((stat, index) => (
            <div key={index}>
              <Image
                src={stat.src}
                alt={stat.label}
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white text-center">
                {stat.value}
              </p>
              <p className="text-base sm:text-lg text-gray-400 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
