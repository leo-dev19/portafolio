import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contacto = () => {
  const form = useRef();
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");

    emailjs
      .sendForm(
        'service_sgv31ui',
        'template_exmpc47',
        form.current,
        { publicKey: 'qiHNg-bxebai7aXkG' }
      )
      .then(() => {
        setMensaje("¡Mensaje enviado correctamente! Te responderé pronto.");
        form.current.reset();
      })
      .catch((error) => {
        console.error('ERROR EMAILJS:', error);
        setMensaje("No se pudo enviar el mensaje. Intenta de nuevo más tarde.");
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      id="contacto" 
      className="py-24 px-6 md:px-10 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Info Contacto */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Contacto</h2>
          <p className="text-gray-300 leading-relaxed max-w-xl text-lg">
            ¿Tienes alguna propuesta, entrevista o proyecto en mente? 
            Escríbeme por aquí o hablemos directamente por WhatsApp.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:leonardogchavez.2006@gmail.com" 
               className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-cyan-400/30 transition">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <p className="font-semibold text-white">Correo electrónico</p>
                <p className="text-sm text-gray-400">leonardogchavez.2006@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/51922058704" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 bg-green-500/5 border border-green-500/10 rounded-2xl p-5 hover:bg-green-500/10 hover:border-green-500/30 transition">
              <FaWhatsapp className="text-green-400 text-2xl" />
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-gray-400">Escríbeme directo por chat</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Envíame un mensaje</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
              <input type="text" name="from_name" required placeholder="Tu nombre"
                     className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Correo electrónico</label>
              <input type="email" name="from_email" required placeholder="tucorreo@gmail.com"
                     className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
              <textarea name="message" rows="5" required placeholder="¿En qué puedo ayudarte?"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition resize-none" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" disabled={enviando}
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white py-4 rounded-xl font-bold transition shadow-lg shadow-cyan-900/20"
            >
              <FaPaperPlane />
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
            {mensaje && <p className="text-center text-cyan-300 font-medium">{mensaje}</p>}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacto;