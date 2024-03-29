import React, { useState } from 'react';
import Memorizze from '../../../assets/images/memorizze.png';
import { useNavigate } from 'react-router-dom';

export const Jobs = ({link, image, title, description}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  };
  
  return (
    <div  onClick={handleClick} className='flex flex-col items-center  mb-4 justify-center'>
      <div
        className={`w-[88%] bg-[#e7e7ed] px-[2%] md:w-[40%] h-[320px] cursor-pointer items-center flex mb-5 justify-center hover:scale-95 transition-transform duration-300 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img
          src={image}
          className={`w-[92%] h-[250px] transition duration-300 object-contain ${isHovered ? 'scale-105'   :   ''}`}
          alt='Pagina inicial de site'
         
        />
      </div>
      <div className='flex right-32 relative flex-col '>   
        <h2 className='font-extralight  text-[20px] ' >{title}</h2>
        <p className='text-gray-700'>{description}</p>
      </div>

    </div>
  );
};
