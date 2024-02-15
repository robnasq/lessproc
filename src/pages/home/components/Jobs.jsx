import React, { useState } from 'react';
import Memorizze from '../../../assets/images/memorizze.png';
import { useNavigate } from 'react-router-dom';

export const Jobs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/memorizze')
  };
  
  return (
    <div  onClick={handleClick} className='flex flex-col items-center  mb-4 justify-center'>
      <div
        className={`w-[88%] bg-[#e7e7ed] px-[2%] md:w-[40%] h-[320px] cursor-pointer items-center flex mb-5 justify-center hover:scale-95 transition-transform duration-300 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img
          src={Memorizze}
          className={`w-[92%] h-[250px] transition duration-300 object-contain ${isHovered ? 'scale-105'   :   ''}`}
          alt='Pagina inicial de site'
         
        />
      </div>
      <div className=' flex  flex-col  justify-start items-start ml-14'    >   
        <h2 className='font-extralight  text-[20px] text-start' >Memorizze</h2>
        <p className='text-gray-700'>Web aplication</p>
      </div>

    </div>
  );
};
