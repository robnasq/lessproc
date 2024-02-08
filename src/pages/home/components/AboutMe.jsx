import React, { useEffect, useState, useRef } from 'react';

export const AboutMe = () => {
  const [isCentered, setIsCentered] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pPosition = pRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const pTop = pPosition.top;
      const pBottom = pPosition.bottom;

      const isInView = pTop >= 0 && pBottom <= windowHeight;

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
        className={`relative ml-auto mr-auto transition-all duration-300  mt-250 flex h-screen w-full items-center justify-center sm:mt-100 ${!isCentered ? 'filter blur-[4px]' : ''}`}
      >
        <p ref={pRef} className="font-plus-jakarta-sans px-[120px] text-start text-[48px] font-extralight leading-1.[357em] tracking-wider text-black sm:text-[32px]">
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
