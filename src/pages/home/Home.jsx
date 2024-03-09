import React from 'react';
import { motion, useScroll } from 'framer-motion';

import { AboutMe } from './components/AboutMe';
import { LetsWork } from './components/LetsWork';
import { Video } from './components/Video';
import { LogoSlider } from './components/LogoSlider';
import { Jobs } from './components/Jobs';

import Memorizze from '../../assets/images/memorizze.png'
import Mycamp from '../../assets/images/my-camp.png'

export const Home = () => {''
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-white">
      <motion.div
        className="fixed -top-1 left-0 z-50 h-[12px] w-full origin-[0%] bg-black"
        style={{ scale: scrollYProgress }}
      />
  
      <div className="flex h-[100vh] items-center justify-center bg-white max-sm:h-[80vh]">
        <div className="mt-[200px] pb-[120px] text-black">
          <h1 className="text-Plus-Jakarta-Sans text-[160px]  overflow-hidden leading-[1em] max-sm:text-[72px]">
            Front-End <br /> Developer
          </h1>
        </div>
      </div>
      <section id="video">
        <Video />
      </section>
      <section id="logo-slider">
        <LogoSlider />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="jobs">
        <Jobs description={'Foto marketplace'} title={'Memorizze'} link={'/memorizze'} image={Memorizze}  />
        <Jobs description={'Hosting Website'} title={'My Camp'} link={'/mycamp'} image={Mycamp}  />

      </section>
      <section id="contact">
        <LetsWork />
      </section>
    </div>
  );
};
