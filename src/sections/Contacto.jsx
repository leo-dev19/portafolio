import React from 'react';

const Contacto = () => (
  <section id="contacto" className="py-20 px-8 bg-black text-center">
    <h2 className="text-3xl font-bold mb-6 text-white">Contacto</h2>
    <p className="text-lg mb-4 text-white">Puedes escribirme o ver mi trabajo:</p>
    <div className="space-y-3 text-lg">
      <p className='text-white'>Email: <a href="mailto:leonardogchavez.2006@gmail.com" className="text-blue-600 hover:underline">leonardogchavez.2006@gmail.com</a></p>
      <p className='text-white'>Teléfono: <span className="text-gray-700">922 058 704</span></p>
      <p className='text-white'>GitHub: <a href="https://github.com/leo-dev19" className="text-blue-600 hover:underline">github.com/leo-dev19</a></p>
    </div>
  </section>
);

export default Contacto;
