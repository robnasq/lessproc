import React from 'react';
import Studio from '../../../../assets/images/studio.jpg';
import { useEffect, useState } from 'react';

export const Memorizze = () => {
  const [divWidth, setDivWidth] = useState(720);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 720 + scrollPosition * 1.1;
      setDivWidth(newWidth);
    };

    const desktopMediaQuery = window.matchMedia('(min-width: 220px)');

    if (desktopMediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="mt-[] flex flex-col px-4">
      <div className="w-full ">
        <h2 className="mt-[130px] max-sm:text-[36px]">
          {' '}
          Melhorando a experiência do usuário atravez da perfomance
        </h2>
        <p className="mt-5 text-gray-600">Memorizze | Photo Maeketplace</p>
      </div>
      <div>
        <img
          style={{ width: divWidth}}
          className="mt-7 h-[180px]"
          src={Studio}
        />
      </div>
      <div className="flex  mt-4 mb-10  justify-between">
        <span>
          <p className='font-extralight'>Nicho</p>
          <p className='text-[12px]'> Fotografia</p>
        </span>
        <span> 
          <p className='font-extralight'>Ano</p>
          <p className='text-[12px]'>2023</p>
        </span>
        <span>
          <p className='font-extralight'>Produto</p>
          <p className='text-[12px]'>Desenvolvimento</p>
        </span>
      </div>
      <div>
        <p>
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
  );
};
