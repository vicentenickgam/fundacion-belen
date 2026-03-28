import { Target, Eye, Flag } from "lucide-react";

const Nosotros = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Sobre Nosotros
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          La Fundación Belén trabaja por el bienestar social, brindando apoyo en educación, salud y desarrollo comunitario a poblaciones vulnerables
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* MISIÓN */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex justify-center mb-3 text-green-600">
              <Target size={40} />
            </div>

            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Misión
            </h2>

            <p className="text-gray-600 text-sm">
              Brindar programas en educación, salud y desarrollo social para mejorar la calidad de vida de las comunidades vulnerables
            </p>
          </div>

          {/* VISIÓN */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex justify-center mb-3 text-green-600">
              <Eye size={40} />
            </div>

            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Visión
            </h2>

            <p className="text-gray-600 text-sm">
              Ser una fundación reconocida a nivel nacional por su impacto social y liderazgo en programas comunitarios
            </p>
          </div>

          {/* OBJETIVO */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex justify-center mb-3 text-green-600">
              <Flag size={40} />
            </div>

            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Objetivo
            </h2>

            <p className="text-gray-600 text-sm">
              Mejorar la calidad de vida de la población en diferentes sectores sociales
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Nosotros;