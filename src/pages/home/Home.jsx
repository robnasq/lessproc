import React from 'react';
import { motion, useScroll } from "framer-motion"

import { AboutMe } from './components/AboutMe';

export const Home = () => {

  const { scrollYProgress} = useScroll()
  return (

    <div className="bg-white">
      <motion.div className=' origin-[0%] bg-black fixed -top-1 left-0 h-[10px] w-full z-50' style={{ scale: scrollYProgress}} />
      <header className="fixed z-50 flex font-extralight  w-full justify-between px-8 pt-10 text-black">
        <span>
          <a href="#"> hello </a>
        </span>
        <span className="flex flex-col text-[20px] tracking-wide font-extralight ">
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
