import React, { useState, useEffect } from 'react';
import VideoP from '../../../assets/video/video-port.mp4';

export const Video = () => {
  const [divHeight, setDivHeight] = useState(340);
  const [divWidth, setDivWidth] = useState(720);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newHeight = 320 + scrollPosition * 0.7;
      const newWidth = 720 + scrollPosition * 1.1;
      setDivHeight(newHeight);
      setDivWidth(newWidth);
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
    <div className="  flex h-screen items-center justify-center max-sm:h-[320px]">
      <div
        className=" flex  items-center justify-center"
        style={{ width: divWidth, height: divHeight }}
      >
        <video
          autoPlay
          src={VideoP}
          loop
          muted
          className="h-full max-h-[744px] max-w-[1366] w-full object-cover max-sm:h-[320px]"
        ></video>
      </div>
    </div>
  );
};
