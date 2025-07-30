// Contact.jsx
export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-4 py-10 flex items-center justify-center">
      <form
        action="https://formspree.io/f/myzppwpl"
        method="POST"
        className="w-full max-w-lg space-y-5 bg-gray-100 p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">Contáctame</h2>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          required
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded hover:scale-105 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
