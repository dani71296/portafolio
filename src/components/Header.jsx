import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { Link } from 'react-router-dom'


export default function Header() {
    const [menuOpen, setmenuOpen] = useState(false);
  return (
      <header className='p-4 flex flex-col md:flex-row md justify-between md: items-center bg-gray-300'>
          {/* logo y hamburguesa */}
          <div className='flex justify-between items-center w-full md:w-auto'>
              <div className='flex items-center gap-2'>
                  <img src="/logo2.webp" alt="logo" className='w-[50px] h-[50px] rounded-full shadow-lg shadow-blue-950/40 object-cover' />
                  <h1 className='text-xl md:text-2xl font-bold text-white'>Daniel.dev</h1>
              </div>
              {/* menu hamburguesa */}
              <button
                  onClick={() => setmenuOpen(!menuOpen)}
                  className="text-highlight md:hidden"
              >
                  <FaBars className="w-6 h-6"/>
                  
              </button>
          </div>
          {/* menu mobil */}
          {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 py-2 mt-2 rounded-lg w-fit self-end text-light">

          <Link to="/" className="hover:text-highlight">HOME</Link>
          <Link to="skills" className="hover:text-highlight">HABILIDADES</Link>
          <Link to="projects" className="hover:text-highlight">VER PROYECTOS</Link>
          <Link to="contact" className="hover:text-highlight">MEMSAJE</Link>
          <a
            href="/curriculum-daniel.pdf"
            download
            className="bg-highlight text-dark rounded-lg flex items-center w-fit"

          >
            <span className="leading-none">CURRICULUM</span>
            <AiFillFilePdf className="text-xl leading-none text-red-600" />
          </a>
        </nav>
      )}

      {/* Menú escritorio */}
      <nav className="hidden md:flex gap-6 text-light items-center">
        <Link to="/" className="hover:text-highlight">HOME</Link>
        <Link to="skills" className="hover:text-highlight">SOBRE MI</Link>
        <Link to="projects" className="hover:text-highlight">VER PROYECTOS</Link>
        <Link to="contact" className="hover:text-highlight">MENSAJE</Link>
        <a
          href="/curriculum-daniel.pdf"
          download
          className="bg-highlight text-dark px-4 py-2 rounded-lg"
        >
          CURRICULUM
        </a>
      </nav>
          
    </header>
  )
}
