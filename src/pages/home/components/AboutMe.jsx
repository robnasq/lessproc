import React, { useEffect, useState, useRef } from 'react';

export const AboutMe = () => {
  const [isCentered, setIsCentered] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pPosition = pRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const pBottom = pPosition.bottom;

      const isInView = pBottom <= windowHeight;

      setIsCentered(isInView);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative z-20 h-full bg-white bg-opacity-0 px-8 pb-160 pt-60">
      <div
        id="blurredComponent"
        className={`relative ml-auto mr-auto transition-all duration-300  mt-[100px] max-sm:mt-0 flex h-screen w-full items-center justify-center sm:mt-100 ${!isCentered ? 'filter blur-[4px]' : ''}`}
      >
        <p ref={pRef} className="font-plus-jakarta-sans px-[120px] max-sm:px-[20px] text-start text-[30px] font-extralight  tracking-wider max-sm:tracking-normal text-black max-sm:text-[20px]">
          Olá, sou Roberto, um desenvolvedor front-end especializado em criar
          interações usando HTML, CSS e JavaScript. Trabalho em estreita
          colaboração com designers e equipes de UX/UI para transformar suas
          visões em realidade funcional, garantindo uma experiência de usuário
          fluida e envolvente. Estou focado em garantir que o código seja
          eficiente, acessível e compatível com os padrões mais recentes da web.
          Estou sempre em busca de desafios e oportunidades para expandir meu
          conhecimento e aprimorar minhas habilidades no desenvolvimento
          front-end.
        </p>
      </div>
    </section>
  );
};
