import React from 'react';
import Inicio from './sections/Inicio';
import SobreMi from './sections/SobreMi';
import Habilidades from './sections/Habilidades';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <nav className="fixed top-0 w-full bg-black/80 text-white p-4 z-50 flex justify-center gap-6">
        <a href="#inicio" className="hover:text-blue-400">Inicio</a>
        <a href="#sobremi" className="hover:text-blue-400">Sobre mí</a>
        <a href="#habilidades" className="hover:text-blue-400">Habilidades</a>
        <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
        <a href="#contacto" className="hover:text-blue-400">Contacto</a>
      </nav>
      <main >
        <Inicio />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
