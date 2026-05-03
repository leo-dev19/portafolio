import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const proyectos = [
  {
    nombre: 'Geocell',
    nota: 18,
    año: 2023,
    descripcion: 'Sistema orientado a servicio técnico con interfaz web desarrollada para gestionar procesos de atención y navegación informativa.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://leo-dev19.github.io/Proyecto-Geocell/paginas/Inicio.html'
  },
  {
    nombre: 'Sistema Matrículas',
    nota: 19,
    año: 2025,
    descripcion: 'Aplicación de gestión escolar desarrollada con C# y React para administración de matrículas, alumnos y procesos académicos.',
    tecnologias: ['C#', 'SQL Server', 'React'],
    link: 'https://github.com/leo-dev19/SistemaMatriculas-Backend'
  },
  {
    nombre: 'CleanMaster',
    nota: 18,
    año: 2023,
    descripcion: 'Sistema de reservas para car wash con enfoque en organización de citas y gestión de servicios.',
    tecnologias: ['Java', 'MySQL'],
    link: 'https://github.com/leo-dev19/Proyecto-CleanMaster'
  },
  {
    nombre: 'Ruta Segura',
    nota: 20,
    año: 2024,
    descripcion: 'Sistema de transporte interprovincial con backend en Spring Boot y estructura pensada para flujos de reserva y control de rutas.',
    tecnologias: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    link: 'https://github.com/leo-dev19/Proyecto-RutaSegura'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Proyectos = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      id="proyectos"
      className="py-24 px-6 md:px-10 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Una selección de proyectos desarrollados en distintas etapas,
            enfocados en frontend, backend y soluciones web full stack.
          </p>
        </div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {proyectos.map((proy, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                    {proy.nombre}
                  </h3>
                  <p className="text-sm text-cyan-400 mt-1">
                    Año: {proy.año} | Nota: {proy.nota}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 min-h-[72px]">
                {proy.descripcion}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proy.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {proy.link && (
                <a
                  href={proy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-lg"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Ver Repositorio
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Proyectos;