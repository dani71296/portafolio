import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center flex flex-col items-center gap-4">
      <div className="flex gap-6 text-xl">
        <a
          href="https://www.facebook.com/danielisraelt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/israel-tudela-32a2a5316/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://wa.me/522225174560?text=Hola,%20vi%20tu%20portafolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="text-sm">
        &copy; 2025 Daniel Tudela. Todos los derechos reservados.
      </p>
    </footer>
  );
}
