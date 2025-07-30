import React from 'react'
import { Link } from 'react-router-dom'

export default function Skills() {
  return (
    <section id="about" className="px-6 py-16 bg-white">
  {/* Título principal */}
  <h2 className="text-4xl font-bold text-center text-black mb-12">
    Sobre mí
  </h2>

  {/* Contenido dividido en 2 columnas */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    
    {/* Descripción personal */}
    <div>
      <h3 className="text-2xl font-semibold text-black mb-4">
        ¡Sobre Mi!
      </h3>
      <p className="text-gray-800 mb-4">
        Soy un Desarrollador Web enfocado en Frontend, construyendo y gestionando interfaces para sitios web y aplicaciones que contribuyen al éxito general del producto. Puedes ver algunos de mis trabajos en la sección de Proyectos.
      </p>
      <p className="text-gray-800 mb-4">
        Me gusta compartir contenido sobre lo que he aprendido en el desarrollo web, con la esperanza de ayudar a otros en la comunidad de desarrollo. Puedes seguirme en LinkedIn e Facebook donde publico contenido útil sobre desarrollo web y programación.
      </p>
      <p className="text-gray-800 mb-6">
        Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades, no dudes en contactarme.
      </p>

      <Link
        to="/contact"
        className="inline-block border border-black text-black text-lg px-6 py-2 rounded-lg hover:scale-105 hover:shadow-md transition"
      >
        Envíame un mensaje
      </Link>
    </div>

    {/* Habilidades */}
    <div>
      <h3 className="text-2xl font-semibold text-black mb-6">
        Mis habilidades
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "HTML", "CSS", "JavaScript", "React", "Wordpress", "PHP",
          "C#", "GIT", "Github", "Responsive Design", "Arduino", "C","Python", "SQL"
        ].map((skill) => (
          <div
            key={skill}
            className="text-center text-sm font-medium p-4 bg-gray-100 rounded-lg shadow hover:scale-105 transition transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  )
}
