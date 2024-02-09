import React, { useState, useEffect } from 'react';
import VideoP from '../../../assets/video/video-port.mp4'

export const Video = () => {
  const [divHeight, setDivHeight] = useState(320);
  const [divWidth, setDivWidth] = useState(720);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newHeight = 320 + scrollPosition  *  0.5;
      const newWidth = 720 + scrollPosition  *  1
      setDivHeight(newHeight);
      setDivWidth(newWidth)
    };

    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

    if (desktopMediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className=" bg-slate-500 h-screen max-sm:h-[320px] flex justify-center items-center">
      <div className="bg-black flex  justify-center items-center" style={{ width: divWidth, height: divHeight,  }}>
        <video>
          <source src={VideoP} />

        </video>
      </div>
    </div>
  );
};

