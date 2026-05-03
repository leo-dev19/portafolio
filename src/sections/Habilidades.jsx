import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaTools,
  FaPalette,
  FaVial
} from 'react-icons/fa';

const habilidades = [
  {
    categoria: 'Lenguajes',
    icono: <FaCode />,
    descripcion:
      'Lenguajes con los que desarrollo lógica de negocio, aplicaciones web y soluciones orientadas a backend y frontend.',
    items: ['Java', 'C#', 'JavaScript', 'Python']
  },
  {
    categoria: 'Frameworks',
    icono: <FaLayerGroup />,
    descripcion:
      'Tecnologías principales que utilizo para construir interfaces modernas y APIs robustas en entornos empresariales.',
    items: ['Spring Boot', 'React', 'ASP.NET Core']
  },
  {
    categoria: 'Base de Datos',
    icono: <FaDatabase />,
    descripcion:
      'Experiencia en modelado, consultas, persistencia y administración de datos en bases relacionales y no relacionales.',
    items: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL']
  },
  {
    categoria: 'Herramientas',
    icono: <FaTools />,
    descripcion:
      'Herramientas que utilizo para versionado, pruebas, documentación, desarrollo local y productividad en proyectos.',
    items: ['Git', 'Docker', 'Swagger', 'Postman', 'Visual Studio Code', 'IntelliJ IDEA']
  },
  {
    categoria: 'Diseño',
    icono: <FaPalette />,
    descripcion:
      'Tecnologías orientadas a maquetación, estilos responsivos y construcción de interfaces limpias y mantenibles.',
    items: ['TailwindCSS', 'Bootstrap', 'HTML', 'CSS']
  },
  {
    categoria: 'Testing / QA',
    icono: <FaVial />,
    descripcion:
      'Conocimientos en pruebas funcionales, validación de endpoints, automatización y apoyo en control de calidad del software.',
    items: ['JUnit', 'JMeter', 'Selenium', 'Mockito']
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Habilidades = () => {
  return (
    <motion.section
      id="habilidades"
      className="py-24 px-6 md:px-10 bg-slate-950 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Cuento con experiencia en desarrollo full stack, integración de APIs,
            modelado de bases de datos, testing y herramientas modernas de desarrollo.
            Estas tecnologías me permiten construir soluciones web escalables,
            mantenibles y enfocadas en resolver necesidades reales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {habilidades.map((hab, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-lg"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="h-full p-6 rounded-2xl hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-cyan-900/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 text-2xl">
                    {hab.icono}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {hab.categoria}
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-5 min-h-[96px]">
                  {hab.descripcion}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hab.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-full bg-slate-900/80 border border-white/10 text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center shadow-lg"
        >
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
            Actualmente enfoco mi crecimiento en el desarrollo de aplicaciones web full stack,
            arquitectura backend con Spring Boot, buenas prácticas en React, integración de APIs
            y mejora continua en testing, rendimiento y calidad de software.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Habilidades;