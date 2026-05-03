import React, { useState } from 'react';
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
    { nombre: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="font-sans scroll-smooth">
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-lg md:text-xl font-bold text-cyan-400">
              Portafolio de Leonardo Chavez
            </h1>

            <div className="hidden md:flex gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {link.nombre}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col gap-4 pb-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 border-b border-white/10 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.nombre}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
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