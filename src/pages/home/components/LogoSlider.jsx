import React from 'react';
import Marquee from 'react-fast-marquee';

import HtmlLogo from '../assets/html-logo.jpeg';
import JsLogo from '../assets/js-logo.jpeg';
import ReactLogo from '../assets/react-logo.jpeg';
import TawilwindLogo from '../assets/tailwind-logo.jpeg';
import TsLogo from '../assets/ts-logo.jpeg';

export const LogoSlider = () => {
  return <div >
    <Marquee className="mt-[140px]">
      <div className="w-[100px] h-12 bg-slate-300 " />
      <img src={ReactLogo} />
    </Marquee>
  </div>;
};
