import React from 'react';
import Marquee from 'react-fast-marquee';

import HtmlLogo from '../assets/html-logo.jpeg';
import JsLogo from '../assets/js-logo.jpeg';
import ReactLogo from '../assets/react-logo.jpeg';
import TawilwindLogo from '../assets/tailwind-logo.jpeg';
import TsLogo from '../assets/ts-logo.jpeg';

export const LogoSlider = () => {
  return <div >
    <Marquee className="mt-[110px]">
      <img src={ReactLogo} className='w-[80px] mx-44' />
      <img src={HtmlLogo} className='w-[80px]' />
      <img src={JsLogo} className='w-[80px] mx-44' />
      <img src={TawilwindLogo} className='w-[100px]' />
      <img src={TsLogo} className='w-[80px] ml-44' />
    </Marquee>
  </div>;
};
