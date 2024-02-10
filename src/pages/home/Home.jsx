import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Logo from '../../assets/images/robn.png';

import { AboutMe } from './components/AboutMe';
import { LetsWork } from './components/LetsWork';
import { Video } from './components/Video';
import { LogoSlider } from './components/LogoSlider';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-white">
      <motion.div
        className=" fixed -top-1 left-0 z-50 h-[12px] w-full origin-[0%] bg-black"
        style={{ scale: scrollYProgress }}
      />
      <header className="fixed z-50 flex w-full justify-between  px-8 pt-10 font-extralight text-black max-sm:h-[40px]">
        <span>
          <a href="#">
            <img src={Logo} className="w-[60px] max-sm:w-[50px]" />
          </a>
        </span>
        <span className="flex flex-col text-[20px] font-extralight tracking-wide max-sm:text-[15px] ">
          <a className=" hover:underline" href="#">
            sobre
          </a>
          <a className=" hover:underline" href="#">
            work
          </a>
          <a className=" hover:underline" href="#">
            contact
          </a>
        </span>
      </header>
      <div className="flex h-[100vh] items-center justify-center bg-white max-sm:h-[80vh]">
        <div className=" mt-[200px] pb-[120px] text-black ">
          <h1 className="text-Plus-Jakarta-Sans text-[160px]  leading-[1em] max-sm:text-[72px]">
            Front-End <br /> Developer
          </h1>
        </div>
      </div>
      <section>
        <Video />
      </section>
      <section>
        <LogoSlider />
      </section>
      <div>
        <AboutMe />
      </div>
      <div>
        <LetsWork />
      </div>
    </div>
  );
};
