import React from 'react';

const proyectos = [
  {
    nombre: 'Geocell',
    nota: 18,
    año: 2023,
    descripcion: 'Servicio Técnico',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://leo-dev19.github.io/Proyecto-Geocell/paginas/Inicio.html'
  },

  {
    nombre: 'Sistema Matrículas',
    nota: 19,
    año: 2025,
    descripcion: 'Gestión escolar con C# y React.',
    tecnologias: ['C#', 'SQL Server', 'React'],
    link: 'https://github.com/leo-dev19/SistemaMatriculas-Backend' 
  },
  {
    nombre: 'CleanMaster',
    nota: 18,
    año: 2023,
    descripcion: 'Reservas para car wash.',
    tecnologias: ['Java', 'MySQL'],
    link: 'https://github.com/leo-dev19/Proyecto-CleanMaster' 
  },
  {
    nombre: 'Ruta Segura',
    nota: 20,
    año: 2024,
    descripcion: 'Transporte interprovincial con backend en Spring Boot.',
    tecnologias: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    link: 'https://github.com/leo-dev19/Proyecto-RutaSegura'
  }
];

const Proyectos = () => (
  <section id="proyectos" className="py-20 px-8 bg-gradient-to-b from-cyan-950 to-teal-900 text-white">
    <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>

      <br />
    <br />
      <br />
    <br />
      <br />
    <br />
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {proyectos.map((proy, i) => (
        <div key={i} className="border rounded p-4 shadow bg-white/10">
          <h3 className="text-xl font-semibold">{proy.nombre}</h3>
          <p className="text-sm italic text-gray-300">Nota: {proy.nota} / Año: {proy.año}</p>
          <p className="my-2">{proy.descripcion}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {proy.tecnologias.map(tech => (
              <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{tech}</span>
            ))}
          </div>

          {proy.link && (
            <div className="mt-4 text-right">
              <a
                href={proy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded shadow transition"
              >
                Ver Proyecto
              </a>
            </div>
          )}
        </div>
      ))}
    </div>

    <br />
      <br />
    <br />
    <br />
      <br />
    <br />
    <br />
      <br />
    <br />
    <br />

  </section>
);

export default Proyectos;
