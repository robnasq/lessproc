import React from 'react';
import Marquee from 'react-fast-marquee';

import HtmlLogo from '../logos/html-logo.jpeg';
import JsLogo from '../logos/js-logo.jpeg';
import ReactLogo from '../logos/react-logo.jpeg';
import TawilwindLogo from '../logos/tailwind-logo.jpeg';
import TsLogo from '../logos/ts-logo.jpeg';

export const LogoSlider = () => {
  return <div >
    <Marquee className="mt-[80px]">
      <img src={ReactLogo} className='w-[150px] mx-28' />
      <img src={HtmlLogo} className='w-[150px]' />
      <img src={JsLogo} className='w-[150px] mx-28' />
      <img src={TawilwindLogo} className='w-[150px]' />
      <img src={TsLogo} className='w-[150px] ml-28 mr-14' />
    </Marquee>
  </div>;
};
