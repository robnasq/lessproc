import React, { useState, useEffect } from 'react';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" bg-slate-500 h-screen flex justify-center items-center">
      <div className="bg-white flex justify-center items-center" style={{ width: divWidth, height: divHeight,  }}>video Div</div>
    </div>
  );
};

