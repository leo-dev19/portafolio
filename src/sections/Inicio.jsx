import React from 'react';
import fondo from '../assets/fondo.gif';
import leonardoImg from '../assets/leonardo.jpeg'; // asegúrate que esté en assets
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Inicio = () => (
  <section
    id="inicio"
    className="min-h-screen flex items-center justify-center bg-cover bg-center text-white relative"
    style={{ backgroundImage: `url(${fondo})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70 z-0" />

    {/* Card */}
    <div className="relative z-10 bg-black/80 rounded-xl shadow-lg p-10 text-center max-w-md w-full">
      <img
        src={leonardoImg}
        alt="Leonardo"
        className="w-36 h-36 rounded-full border-4 border-cyan-500 mx-auto mb-4 object-cover shadow-lg"
      />
      <h1 className="text-3xl font-bold">Leonardo Gregory Chávez Simbron</h1>
      <p className="text-sm text-gray-300 mt-2">Estudiante de Computación e Informática - Backend & Web Developer</p>

      <div className="flex justify-center gap-4 mt-6 text-2xl text-cyan-400">
        <a href="https://github.com/leo-dev19" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-chavez-simbron-773bb9320/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
        <a href="mailto:leonardogchavez.2006@gmail.com">
          <FaEnvelope className="hover:text-white transition" />
        </a>
      </div>

      <a
        href="/CV-Leonardo-Chavez.pdf"
        download
        className="mt-6 inline-block bg-cyan-600 px-6 py-2 rounded hover:bg-cyan-700 transition text-white"
      >
        Descargar CV
      </a>
    </div>
  </section>
);

export default Inicio;
