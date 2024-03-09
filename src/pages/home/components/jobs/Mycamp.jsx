import React, { useEffect, useState } from 'react';
import Outdor from '../../../../assets/images/outdor.jpg';

export const Mycamp = () => {
  const [divWidth, setDivWidth] = useState(1280);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 1300 + scrollPosition * 0.2;
      setDivWidth(newWidth);
    };

    const desktopMediaQuery = window.matchMedia('(min-width: 1280px)');

    if (desktopMediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [divWidth]);
  return (
    <div className="scroll-behavior:smooth mt-[]  flex flex-col px-4 pb-4">
      <div className="w-full">
        <h2 className="mt-[130px] overflow-hidden text-6xl max-sm:text-[36px]">
          Melhorando a experiência <br /> do usuário através da performance
        </h2>
        <p className="mt-5 text-gray-600">MyCamp | Hosting service</p>
      </div>
      <div className="flex w-full  md:justify-center">
        <img
          style={{ width: divWidth }}
          className="mt-7 h-[180px] bg-cover md:h-[400px]"
          src={Outdor}
        />
      </div>
      <div className="md:mt-7 md:flex md:flex-row md:justify-start">
        <div className="mb-10 mt-4 flex justify-around md:w-[30%]">
          <span>
            <p className="font-extralight">Nicho</p>
            <p className="text-[12px]"> Hosting</p>
          </span>
          <span>
            <p className="font-extralight">Ano</p>
            <p className="text-[12px]">2023</p>
          </span>
          <span>
            <p className="font-extralight">Produto</p>
            <p className="text-[12px]">Desenvolvimento</p>
          </span>
        </div>
        <div className="md:w-[70%]">
          <p className="md:text-[32px]">
            O projeto My Camp é uma plataforma desenvolvida para facilitar a
            reserva de campings, oferecendo aos usuários uma experiência
            intuitiva e eficiente. Com o front-end construído em React.ts e
            estilizado utilizando Tailwind CSS, o My Camp combina funcionalidade
            e estética para criar uma interface amigável e atraente. Através do
            My Camp, os usuários podem explorar uma variedade de opções de
            camping disponíveis, visualizando detalhes como localização,
            comodidades e disponibilidade de datas. A integração com a
            plataforma permite que os usuários façam reservas de forma rápida e
            fácil, selecionando suas datas desejadas e concluindo o processo com
            poucos cliques. Além disso, o My Camp oferece recursos adicionais
            para melhorar a experiência do usuário, como filtros de pesquisa
            avançados, avaliações e comentários de outros campistas, e a
            possibilidade de salvar campings favoritos para acesso posterior.
            Com uma interface responsiva e otimizada para dispositivos móveis, o
            My Camp garante que os usuários possam acessar e utilizar a
            plataforma de qualquer lugar, a qualquer momento, tornando a
            experiência de reserva de camping simples e conveniente.
          </p>
        </div>
      </div>
    </div>
  );
};
