import React from 'react';

export const LetsWork = () => {
  return (
    <section className="z-[95] rounded-tl-[0px] bg-[#000000] bg-opacity-[100%] pb-[80px] pt-[80px]">
      <div className=" font-plus-jakarta-sans py-[200px] max-sm:text-[72px] max-sm:py-[100px] text-center text-[128px] font-light leading-[1em] tracking-[-0.025em] text-[#FFFFFF] text-opacity-[100%] md:text-[60px]">
        Let's Work <br /> Together
      </div>
      <div className="flex justify-center gap-4">
        <a className=" cursor-pointer rounded-[50px] border border-[#3a3a3a] bg-black px-[20px] py-[25px] text-center text-[#FFFFFF] text-opacity-[100%]">
          roberto.nasc93@gmail.com
        </a>
        <a className="w-[200px] rounded-[50px] cursor-pointer border border-[#3a3a3a] bg-black px-[20px] py-[25px] text-center text-[#FFFFFF] text-opacity-[100%]">
          Fale comigo{' '}
        </a>
      </div>
    </section>
  );
};
