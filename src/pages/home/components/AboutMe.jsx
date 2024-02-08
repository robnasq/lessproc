import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <section className="relative z-[20] h-[100%] bg-white bg-opacity-[0%] px-8 pb-[160px] pt-[60px]">
      <motion.div
        className="h-[50vh] bg-red-600 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div
        id="blurredComponent"
        className="relative ml-[auto] mr-auto mt-[250px] flex   h-screen w-full items-center justify-center sm:mt-[100px]"
      >
        <p className="font-plus-jakarta-sans px-[120px] text-start text-[48px] font-extralight  leading-[1.357em] tracking-wider text-[#000] sm:text-[32px]">
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
