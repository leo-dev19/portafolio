import React from 'react';

const habilidades = {
  Lenguajes: ['Java', 'C#', 'JavaScript'],
  Frameworks: ['Spring Boot', 'React', 'ASP.NET Core'],
  BaseDatos: ['MySQL', 'SQL Server'],
  Herramientas: ['Git', 'Docker', 'Swagger'],
  Diseño: ['TailwindCSS', 'Bootstrap', 'HTML', 'CSS'],
};

const Habilidades = () => (
  <section id="habilidades" className="py-20 px-8 bg-gradient-to-b from-cyan-950 to-teal-900 text-black">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">Habilidades Técnicas</h2>
      <br />
  <br />
  <br />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {Object.entries(habilidades).map(([categoria, items]) => (
        <div key={categoria} className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-xl mb-2">{categoria}</h3>
          <ul className="list-disc list-inside">
            {items.map(item => <li key={item}>{item}</li>)}
          </ul>
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
  <br />
    <br />
  <br />
  <br />
    <br />
  <br />

  </section>
);

export default Habilidades;
