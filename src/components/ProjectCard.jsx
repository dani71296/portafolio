// components/ProjectCard.jsx
export default function ProjectCard({ title, description, image, demoLink }) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden mb-10">
      {/* Imagen */}
      <div className="w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Descripción */}
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
        <p className="text-gray-700 text-base mb-6">{description}</p>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
