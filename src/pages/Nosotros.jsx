const Nosotros = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          Sobre Nosotros
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          La Fundación Belén trabaja por el bienestar social, brindando apoyo en educación, salud y desarrollo comunitario a poblaciones vulnerables.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* MISIÓN */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Misión
            </h2>
            <p className="text-gray-600">
              Brindar programas en educación, salud y desarrollo social para mejorar la calidad de vida de las comunidades vulnerables.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Visión
            </h2>
            <p className="text-gray-600">
              Ser una fundación reconocida a nivel nacional por su impacto social y liderazgo en programas comunitarios.
            </p>
          </div>

          {/* OBJETIVO */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Objetivo
            </h2>
            <p className="text-gray-600">
              Mejorar la calidad de vida de la población en diferentes sectores sociales.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Nosotros;