import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // You can customize animation duration here
      once: true,    // Animation occurs only once on scroll
    });
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;

