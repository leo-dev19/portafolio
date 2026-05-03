import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Inicio from './sections/Inicio';
import SobreMi from './sections/SobreMi';
import Habilidades from './sections/Habilidades';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';
import Experiencia from './sections/Experiencia';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { nombre: 'Inicio', href: '#inicio' },
    { nombre: 'Sobre mí', href: '#sobremi' },
    { nombre: 'Experiencia', href: '#experiencia' },
    { nombre: 'Habilidades', href: '#habilidades' },
    { nombre: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <div className="font-sans scroll-smooth bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            
            {/* Logo y Nombre */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img 
                src="/images/favicon3.png" 
                alt="Logo Leonardo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
              <span className="text-lg md:text-2xl font-extrabold tracking-tight text-cyan-400 transition-colors">
                Leonardo Chavez
              </span>
            </a> 

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm md:text-base text-gray-200 hover:text-cyan-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.nombre}
                </a>
              ))}

              <a
                href="#contacto"
                className="ml-2 inline-flex items-center rounded-full bg-cyan-500 hover:bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition"
              >
                Hablemos
              </a>
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-lg p-4 shadow-xl">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-cyan-300 transition"
                  >
                    {link.nombre}
                  </a>
                ))}

                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex justify-center rounded-xl bg-cyan-500 hover:bg-cyan-600 px-4 py-3 font-semibold text-white transition"
                >
                  Hablemos
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Inicio />
        <SobreMi />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;