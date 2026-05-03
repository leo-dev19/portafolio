import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Experiencia = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  const experiencias = {
    "Desarrollador Full Stack - Almacén Logístico": {
      empresa: "Logistiflex",
      periodo: "Noviembre 2025 - Marzo 2026",
      descripcion:
        "Desarrollo de un sistema de control de asistencia y gestión de la logística de productos, modernizando procesos manuales hacia una plataforma digital más eficiente, organizada y orientada a una mejor trazabilidad operativa.",
      stack: ["Java", "Spring Boot", "React", "Redux", "PostgreSQL", "Postman", "JMeter", "Git", "GitHub"],
      detalles: [
        { titulo: "Front-end", texto: "Desarrollo de interfaces en React, manejo de estado con Redux, uso de hooks y estructura modular." },
        { titulo: "Integración con APIs", texto: "Consumo de servicios REST para autenticación, gestión de usuarios, módulos y flujos del sistema." },
        { titulo: "Backend", texto: "Participación en desarrollo e integración de lógica backend con Java y Spring Boot." },
        { titulo: "Base de datos", texto: "Trabajo con consultas y persistencia en PostgreSQL para los diferentes módulos." },
        { titulo: "Autenticación y roles", texto: "Implementación y validación de acceso por roles y permisos dentro del sistema." },
        { titulo: "Testing QA", texto: "Pruebas funcionales, validación de endpoints con Postman y pruebas de rendimiento con JMeter." },
        { titulo: "Control de versiones", texto: "Uso de Git y GitHub para versionado y colaboración." },
        { titulo: "Metodologías", texto: "Trabajo bajo Scrum con sprints, dailys, retrospectivas, Jira y pair programming." }
      ],
      imagenes: [
        { src: `${import.meta.env.BASE_URL}images/login.jpeg`, alt: "Login", caption: "Pantalla de inicio de sesión" },
        { src: `${import.meta.env.BASE_URL}images/asist.jpeg`, alt: "Asistencias", caption: "Módulo de aprobación de asistencias" }
      ]
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        id="experiencia"
        className="py-24 px-6 md:px-10 bg-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Experiencia Laboral</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Construcción de soluciones empresariales con enfoque en escalabilidad, calidad de software y mejora de procesos.
            </p>
          </div>

          {Object.entries(experiencias).map(([puesto, info]) => (
            <motion.div
              key={puesto}
              whileHover={{ y: -5 }}
              className="mb-10 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">{puesto}</h3>
              <p className="text-cyan-400 mt-2 text-lg font-medium">{info.empresa} - {info.periodo}</p>
              <p className="mt-4 text-gray-200 leading-relaxed text-lg">{info.descripcion}</p>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest text-cyan-300 mb-3 font-bold">Stack tecnológico</h4>
                <div className="flex flex-wrap gap-2">
                  {info.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-slate-900 border border-white/10 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {info.detalles.map((d, i) => (
                  <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-4">
                    <h5 className="text-white font-semibold mb-1">{d.titulo}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{d.texto}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {info.imagenes.map((img, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setImagenActiva(img)}
                    className="bg-slate-900/50 p-2 rounded-2xl border border-white/5 overflow-hidden text-left cursor-pointer"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <p className="text-sm text-gray-300 mt-3 px-1">{img.caption}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {imagenActiva && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImagenActiva(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-slate-900 border border-white/10 rounded-3xl p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setImagenActiva(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
              >
                <FaTimes />
              </button>

              <img
                src={imagenActiva.src}
                alt={imagenActiva.alt}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />

              <p className="text-center text-gray-300 mt-4 text-sm md:text-base">
                {imagenActiva.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experiencia;