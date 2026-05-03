import React from 'react';
import { motion } from 'framer-motion'; // Asegúrate de tener framer-motion instalado
import leonardoImg from '../assets/ftPROF.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-950 to-slate-950" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-8 text-center max-w-2xl"
      >
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="relative mx-auto w-64 h-64 mb-8"
        >
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />
          <img
            src={leonardoImg}
            alt="Leonardo"
            className="relative w-full h-full rounded-full border-4 border-slate-800 shadow-2xl object-cover object-top"
          />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <TypeAnimation
            sequence={[
              'Hola, soy Leonardo',
              3000,
              'Hola, soy Dev Full Stack',
              3000,
              'Hola, soy Bachiller en Computación',
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400"
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
          Creando soluciones tecnológicas escalables y modernas.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacto"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            Trabajemos juntos
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}cv_chavez_leonardo.pdf`}
            download="cv_chavez_leonardo.pdf"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2"
          >
            <FaDownload /> Descargar CV
          </motion.a>
        </div>

        {/* Redes */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center gap-8 text-3xl text-gray-400"
        >
          <a href="https://github.com/leo-dev19" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/leonardo-chavez-simbron-773bb9320/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
          <a href="mailto:leonardogchavez.2006@gmail.com" className="hover:text-cyan-400 transition-colors"><FaEnvelope /></a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Inicio;