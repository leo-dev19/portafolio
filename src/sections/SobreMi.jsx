import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';

const SobreMi = () => {
  const fortalezas = [
    { icono: <FaCode />, titulo: "Full Stack Development", desc: "Arquitectura escalable en React y Spring Boot." },
    { icono: <FaServer />, titulo: "Backend Robust", desc: "API REST, Spring Security y buenas prácticas." },
    { icono: <FaDatabase />, titulo: "Gestión de Datos", desc: "Diseño y optimización en SQL Server/PostgreSQL." },
    { icono: <FaShieldAlt />, titulo: "Calidad y Test", desc: "Testing automatizado con JUnit y JMeter." },
    { icono: <FaRocket />, titulo: "Despliegue CI/CD", desc: "Automatización eficiente con Jenkins/Docker." },
    { icono: <FaUsers />, titulo: "Trabajo Ágil", desc: "Metodologías Scrum y Code Review." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      id="sobremi" 
      className="py-24 px-6 md:px-10 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          Perfil Profesional
        </h2>

        {/* Resumen Profesional */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl mb-16 shadow-2xl">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center">
            Bachiller en Computación e Informática con enfoque en <span className="text-cyan-400 font-semibold">soluciones Full Stack</span>.
            Apasionado por transformar necesidades de negocio en arquitecturas de software modernas, 
            siempre priorizando la <span className="text-cyan-400 font-semibold">escalabilidad, el rendimiento y la calidad</span> mediante testing riguroso.
          </p>
        </div>

        {/* Fortalezas Profesionales */}
        <h3 className="text-3xl font-bold mb-10 text-center">Áreas de Especialización</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fortalezas.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-cyan-400 text-3xl mb-4">{f.icono}</div>
              <h4 className="text-xl font-semibold mb-2">{f.titulo}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SobreMi;