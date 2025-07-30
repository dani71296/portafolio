import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Windbnb",
    description:
      "Una app similar a airbnb construido con React, Vite y TailwindCSS. Muestra lugares disponibles para hospedaje, y sus detalles en cards.",
    image: "/images/windbnb.jpg",
    demoLink: "https://funval2-0-fjfp.vercel.app/"
  },
  {
    title: "Buscador de Imagenes",
    description:
      "Aplicación buscadora de imagenes que consume una API JSON para mostrar imagenes solicitadas. Incluye búsqueda filtrada",
    image: "/images/snapshot.jpg",
    demoLink: "https://funval2-0-fib8.vercel.app/",
  },
  {
    title: "Pagina Web",
    description:
      "pagina web de una empresa en la cual se tiene todos los campos necesarios e informacion para el sliente final",
    image: "/images/webpage.jpg",
    demoLink: "https://practica-calificada-3-alpha.vercel.app/",
  },
  {
    title: "Pagina de peliculas",
    description:
      "Pagina donde se puede filtrar y ver peliculas a traves del consumo de una API ",
    image: "/images/netifly.jpg",
    demoLink: "https://practica-calificada-4-sepia.vercel.app/",
  },
  {
    title: "Aplicacion de Clima",
    description:
      "Aplicacion donde se puede visualizar el clima en tiempo real y filtrar por lugares, se puede obtener el pronostico de los siguientes dias ",
    image: "/images/clima.jpg",
    demoLink: "https://mini-proyecto-2-theta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Mis Proyectos</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
