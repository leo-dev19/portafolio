import React from 'react';
import {
FaGamepad,
FaMusic,
FaPlane,
FaAndroid,
FaTiktok,
FaBook,
FaCar,
FaCamera
} from 'react-icons/fa';


const SobreMi = () => (
  <section id="sobremi" className="py-20 px-8 bg-gradient-to-b from-cyan-950 to-teal-900 text-white">
    <h2 className="text-5xl font-extrabold mb-8 text-center">Sobre mí</h2>
    <p className="text-center max-w-4xl mx-auto text-xl mb-12 leading-relaxed">
  <span className="text-cyan-400 font-semibold">Hola, soy Leonardo Chávez.</span> bachiller egresado de Computación e Informática, 
  con una sólida pasión por la programación backend, el desarrollo web y la creación de soluciones tecnológicas modernas orientadas a resolver problemas reales. 
  Me considero una persona proactiva, responsable y comprometida con el aprendizaje continuo, siempre en búsqueda de mejorar mis habilidades técnicas y aportar valor en 
  cada proyecto en el que participo.
</p>
<br></br>
<br></br>
<br></br>
<br></br>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
  {/* Datos personales */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">Datos Personales</h3>
    <ul className="space-y-3 text-lg">
      <li><span className="font-semibold text-cyan-400">Cumpleaños:</span> 17/01/2006</li>
      <li><span className="font-semibold text-cyan-400">Teléfono:</span> 922 058 704</li>
      <li><span className="font-semibold text-cyan-400">Email:</span> leonardogchavez.2006@gmail.com</li>
      <li><span className="font-semibold text-cyan-400">GitHub:</span> github.com/leo-dev19</li>
      <li><span className="font-semibold text-cyan-400">Ubicación:</span> Lima, Perú</li>
    </ul>
  </div>

  {/* Intereses */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">Mis Intereses</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaGamepad className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Juegos</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaMusic className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Música</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaPlane className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Viajar</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaAndroid className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Android</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaTiktok className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Red Social</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaBook className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Libros</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaCar className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Autos</span>
      </div>
      <div className="bg-white/10 p-4 rounded text-center hover:bg-white/20 transition">
        <FaCamera className="mx-auto text-4xl mb-2" />
        <span className="text-sm">Fotos</span>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>


  </section>
);

export default SobreMi;
