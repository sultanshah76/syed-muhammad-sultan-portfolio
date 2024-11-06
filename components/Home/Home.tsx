'use client'

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();
  }, []);
  
  return (
    <div className='overflow-hidden'>
      <div id="section0">
      <Hero />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section1">  
        <Services />
      </div>
      
      <div id="section5">
        <Project />
      </div>
      
      <div id="section3">
        <Skills />
      </div>
      
      <div id="section4">
        <Contact />
      </div>
    </div>
  )
}

export default Home;
