import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/fondo.jpg')" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Hola, soy Daniel Tudela
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl">
        Un desarrollador web orientado a resultados, construyendo y gestionando sitios y aplicaciones web que impulsan el éxito de los productos.
      </p>
      <Link
        to="/projects"
        className="bg-highlight text-black px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition mt-10 text-2xl "
      >
        VER PROYECTOS
      </Link>
    </section>
  );
}
