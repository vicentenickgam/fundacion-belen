import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Fundación Belén
      </h1>

      <p className="max-w-xl text-lg md:text-xl mb-6">
        Transformando vidas a través de la educación, la salud y el desarrollo social
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/nosotros"
          className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Conócenos
        </Link>

        <Link
          to="/programas"
          className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-green-700 transition"
        >
          Nuestros Programas
        </Link>
      </div>

    </section>
  );
};

export default Hero;