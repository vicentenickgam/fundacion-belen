const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Fundación Belén
      </h1>

      <p className="max-w-xl text-lg md:text-xl mb-6">
        Trabajamos por el bienestar social, la educación, la salud y el desarrollo de comunidades vulnerables en Colombia.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Conócenos
        </button>

        <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-green-700 transition">
          Nuestros Programas
        </button>
      </div>
    </section>
  );
};

export default Hero;