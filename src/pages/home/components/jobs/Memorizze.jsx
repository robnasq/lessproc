import React, { useEffect, useState } from 'react';
import Studio from '../../../../assets/images/studio.jpg';

export const Memorizze = () => {
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
  }, [divWidth]); // Reattach listener when divWidth changes

  return (
    <div className="mt-[] flex  pb-4 scroll-behavior:smooth flex-col px-4">
      <div className="w-full">
        <h2 className="mt-[130px] text-6xl overflow-hidden max-sm:text-[36px]">
          Melhorando a experiência <br /> do usuário através da performance
        </h2>
        <p className="mt-5 text-gray-600">Memorizze | Photo Marketplace</p>
      </div>
      <div className="w-full flex  md:justify-center" >
        <img
          style={{ width: divWidth }}
          className="mt-7 md:h-[400px] h-[180px]"
          src={Studio}
          alt="Studio"
        />
      </div>
      <div className="md:flex md:mt-7 md:flex-row md:justify-start">
        <div className="flex mt-4 mb-10 md:w-[30%] justify-around">
          <span>
            <p className="font-extralight">Nicho</p>
            <p className="text-[12px]"> Fotografia</p>
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
          <p className='md:text-[32px]'> 
            O "Memorizze" é um marketplace que conecta fotógrafos a compradores,
            oferecendo uma plataforma intuitiva com perfis personalizados para os
            artistas e vasto catálogo de fotos. Com busca, carrinho de compras e
            checkout, proporciona uma experiência agradável de compra. Conta com
            painel do fotógrafo para gerenciar portfólio e interagir com clientes.
            Administração eficiente para monitorar vendas e garantir qualidade.
            Promove a arte da fotografia, unindo paixão e negócios em um só lugar.
          </p>
        </div>
      </div>
    </div>
  );
};
