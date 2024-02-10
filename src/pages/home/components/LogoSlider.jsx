import React from 'react';
import Marquee from 'react-fast-marquee';

export const LogoSlider = () => {
  return <div >
    <Marquee className='mt-[140px]'> 
      <div className='w-[100px] h-12 bg-slate-300 '></div>
    </Marquee>
  </div>;
};
