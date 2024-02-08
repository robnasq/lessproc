import React from 'react';
import { motion, useScroll } from 'framer-motion';

import { AboutMe } from './components/AboutMe';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-white">
      <motion.div
        className=" fixed -top-1 left-0 z-50 h-[10px] w-full origin-[0%] bg-black"
        style={{ scale: scrollYProgress }}
      />
      <header className="fixed z-50 flex w-full  justify-between px-8 pt-10 font-extralight text-black">
        <span>
          <a href="#"> hello </a>
        </span>
        <span className="flex flex-col text-[20px] font-extralight tracking-wide ">
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
      <div className="flex h-[100vh] items-center justify-center bg-white">
        <div className=" mt-[200px] pb-[120px] text-black  sm:text-[80px]">
          <h1 className="text-Plus-Jakarta-Sans text-[160px]  leading-[1em]">
            Front-End <br /> Developer
          </h1>
        </div>
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
};
