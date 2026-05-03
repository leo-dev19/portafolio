import React, { useState } from 'react';

const Experiencia = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  const experiencias = {
    "Desarrollador Full Stack - Almacén Logístico": {
      empresa: "Logistiflex",
      periodo: "Noviembre 2025 - Marzo 2026",
      descripcion:
        "Desarrollo de un sistema de control de asistencia y gestión de la logística de productos, modernizando procesos manuales hacia una plataforma digital más eficiente y organizada.",
      stack: [
        "Java",
        "Spring Boot",
        "React",
        "Redux",
        "PostgreSQL",
        "Postman",
        "JMeter",
        "Git",
        "GitHub"
      ],
      detalles: [
        {
          titulo: "Front-end",
          texto:
            "Desarrollo de interfaces en React, manejo de estado con Redux, uso de hooks y estructura modular para organizar funcionalidades."
        },
        {
          titulo: "Integración con APIs",
          texto:
            "Consumo de servicios REST para autenticación, gestión de usuarios, módulos y flujos del sistema."
        },
        {
          titulo: "Backend",
          texto:
            "Participación en desarrollo e integración de lógica backend con Java y Spring Boot."
        },
        {
          titulo: "Base de datos",
          texto:
            "Trabajo con consultas y persistencia en PostgreSQL para los diferentes módulos del sistema."
        },
        {
          titulo: "Autenticación y roles",
          texto:
            "Implementación y validación de acceso por roles y permisos dentro del sistema."
        },
        {
          titulo: "Testing QA",
          texto:
            "Pruebas funcionales, validación de endpoints con Postman y apoyo en pruebas de rendimiento con JMeter."
        },
        {
          titulo: "Control de versiones",
          texto:
            "Uso de Git y GitHub para versionado y colaboración."
        },
        {
          titulo: "Metodologías",
          texto:
            "Trabajo bajo Scrum con sprints, dailys, retrospectivas, Jira, code review y pair programming."
        }
      ],
      imagenes: [
        {
          src: "/images/login.jpeg",
          alt: "Pantalla de inicio de sesión del sistema Logistiflex",
          caption: "Pantalla de inicio de sesión del sistema"
        },
        {
          src: "/images/asist.jpeg",
          alt: "Módulo de aprobación de asistencias en Logistiflex",
          caption: "Módulo de aprobación de asistencias"
        }
      ]
    }
  };

  return (
    <section
      id="experiencia"
      className="py-20 px-8 bg-gradient-to-b from-teal-900 to-cyan-950 text-white"
    >
      <h2 className="text-5xl font-extrabold mb-8 text-center">Experiencia laboral</h2>

      <div className="max-w-6xl mx-auto">
        {Object.entries(experiencias).map(([puesto, info]) => (
          <div
            key={puesto}
            className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{puesto}</h3>
            <p className="text-cyan-400 mt-1">
              {info.empresa} - {info.periodo}
            </p>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {info.descripcion}
            </p>

            <p className="mt-3 text-sm italic text-cyan-200">
              Stack: {info.stack.join(", ")}
            </p>

            <ul className="mt-5 list-disc list-inside space-y-3 text-gray-200 leading-relaxed">
              {info.detalles.map((detalle, index) => (
                <li key={index}>
                  <span className="font-semibold text-white">
                    {detalle.titulo}:
                  </span>{" "}
                  {detalle.texto}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-cyan-300 mb-4">
                Ejemplos visuales:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {info.imagenes.map((imagen, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg"
                  >
                    <button
                      type="button"
                      onClick={() => setImagenActiva(imagen)}
                      className="w-full group"
                    >
                      <img
                        src={imagen.src}
                        alt={imagen.alt}
                        className="w-full h-[260px] object-cover rounded-xl transition duration-300 group-hover:scale-[1.02] cursor-pointer"
                      />
                    </button>

                    <p className="mt-3 text-sm text-gray-300 text-center">
                      {imagen.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {imagenActiva && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setImagenActiva(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setImagenActiva(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-cyan-300 transition"
              aria-label="Cerrar imagen"
            >
              ×
            </button>

            <img
              src={imagenActiva.src}
              alt={imagenActiva.alt}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            <p className="mt-4 text-sm text-gray-200 text-center">
              {imagenActiva.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiencia;