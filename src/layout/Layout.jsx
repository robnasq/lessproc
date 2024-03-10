import React from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../assets/images/robn.png'

export const Layout
 = () => {
  return (
    <div>
          <header className="fixed bg-transparent z-50 flex w-full justify-between px-8 pt-10 font-extralight text-black ">
        <span>
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[60px] max-sm:w-[50px]" />
          </a>
        </span>
        <span className="flex flex-col text-[20px] font-extralight tracking-wide max-sm:text-[15px] ">
          <a className="hover:underline" href="#about-me">
            sobre
          </a>
          <a className="hover:underline" href="#jobs">
            work
          </a>
          <a className="hover:underline" href="#contact">
            contact
          </a>
        </span>
      </header>
      <Outlet />
    </div>
  )
}
